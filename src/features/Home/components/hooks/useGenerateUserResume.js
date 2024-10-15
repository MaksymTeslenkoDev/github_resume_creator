import { useGitHubMutation } from '../../../../components/hooks/useGithubQueries';
import { useAppContext } from '../../../../components/providers';

export function useGetUserInfo() {
  const { setLoading, setError } = useAppContext();
  const { mutateAsync } = useGitHubMutation((param) => `/users/${param}`);

  async function getUserInfo(username) {
    setLoading(true);
    setError(null);
    try {
      return await mutateAsync(username, {
        onSettled: () => setLoading(false),
        onError: (err) => {
          setError(err.message);
          throw new Error(err);
        },
      });
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  }

  return {
    getUserInfo,
  };
}
