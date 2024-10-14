export default {
  isDev: process.env.REACT_APP_ENV === 'development',
  github: {
    apiUrl: process.env.REACT_APP_GITHUB_API_URL || 'https://api.github.com',
    accessToken: process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN,
  },
};
