import { useEffect } from 'react';
import { useGitHubQuery } from '../../../../components/hooks/useGithubQueries';
import { useAppContext } from '../../../../components/providers';

export function useGithubUserInfo(username) {
  const { setLoading, setError } = useAppContext();
  const { data, isFetching, error } = useGitHubQuery(['user', username], () => `/users/${username}`, { enabled: !!username });

  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching, setLoading]);

  useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error, setError]);

  return {
    data,
    error
  };
}
