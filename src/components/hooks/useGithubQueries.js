import { useQuery, useMutation } from '@tanstack/react-query';
import { useGithubApiContext } from '../providers';

export const useGitHubQuery = (key, endpoint, options = {}) => {
  const githubApi = useGithubApiContext();

  return useQuery(key, () => githubApi.get(endpoint).then((res) => res.data), options);
};

export const useGitHubMutation = (endpoint, options = {}) => {
  const githubApi = useGithubApiContext();

  return useMutation((data) => githubApi.post(endpoint, data).then((res) => res.data), options);
};
