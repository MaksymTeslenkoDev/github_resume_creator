import { useQuery, useMutation } from '@tanstack/react-query';
import { useGithubApiContext } from '../providers';

const MapRestToMethod = {
  GET: 'get',
  POST: 'post',
};

export const useGitHubQuery = (key, endpoint, options = {}) => {
  const githubApi = useGithubApiContext();

  return useQuery({
    queryKey: key,
    queryFn: (param) => githubApi.get(endpoint(param)).then(res=>res.data),
    ...options,
  });
};

export const useGitHubMutation = (url, method = 'GET', options = {}) => {
  const githubApi = useGithubApiContext();

  return useMutation({
    mutationFn: (params, body) => githubApi[MapRestToMethod[method]](url(params), body).then(res=>res.data),
    ...options,
  });
};
