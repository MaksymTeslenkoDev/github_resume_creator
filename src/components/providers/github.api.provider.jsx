import React, { createContext, useContext } from 'react';
import axios from 'axios';
import config from '../../utils/config';

export const GitHubApiContext = createContext();

export function GitHubApiProvider({ children }){
  const githubApi = axios.create({
    baseURL: config.github.apiUrl,
    headers: {
      'Content-Type': 'application/vnd.github.v3+json',
      Authorization: `token ${config.github.accessToken}`,
    },
  });

  githubApi.interceptors.request.use(
    (configAxios) => {
      return configAxios;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  githubApi.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          // eslint-disable-next-line
          console.error('Git Hub Api error - unauthorized access - Invalid token');
        } else if (status === 403) {
          // eslint-disable-next-line
          console.error('Git Hub Api error - access forbidden (rate limit may have been exceeded)');
        } else if (status === 404) {
          // eslint-disable-next-line
          console.error('Git Hub Api error - resource not found');
        } else {
          // eslint-disable-next-line
          console.error('GitHub API Error:', error.response.data);
        }
      } else if (error.request) {
        // eslint-disable-next-line
        console.error('GitHub API No Response:', error.request);
      } else {
        // eslint-disable-next-line
        console.error('GitHub API Error:', error.message);
      }
      return Promise.reject(error);
    },
  );

  return <GitHubApiContext.Provider value={githubApi}>{children}</GitHubApiContext.Provider>;
};

export function useGithubApiContext() {
  const context = useContext(GitHubApiContext);
  if (context === undefined) {
    throw new Error('useGithubApiContext must be used within a GitHubApiProvider');
  }
  return context;
}
