import React, { createContext, useContext } from 'react';
import axios from 'axios';
import config from '../../utils/config';

export const GitHubApiContext = createContext();


const MapStatusToErrors = {
  401: 'Unauthorized access.',
  403: 'Access forbidden.',
  404: 'Not found.'
}
export function GitHubApiProvider({ children }){
  const githubApi = axios.create({
    baseURL: config.github.apiUrl,
    headers: {
      'Content-Type': 'application/vnd.github.v3+json',
      Authorization: `Bearer ${config.github.accessToken}`,
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
        let err = 'GitHub API Error: ';
        err += MapStatusToErrors[status] || error.response.data;
        // eslint-disable-next-line
        console.error(err);
        return Promise.reject(err);
      } 
      if (error.request) {
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
