import { useEffect } from 'react';
import { useGitHubQuery } from '../../../../components/hooks/useGithubQueries';
import { useAppContext } from '../../../../components/providers';

export function useGithubUserRepos(username) {
  const { setLoading, setError } = useAppContext();
  const { data, isFetching, error } = useGitHubQuery(['user/repos', username], () => `/users/${username}/repos`, { enabled: !!username });

  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching, setLoading]);

  useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error, setError]);

  const getUserReposFromCache = async (userName) => {
    return {
      error,
      data,
    };
  };

  return {
    data,
    error,
    getUserReposFromCache,
  };
}
