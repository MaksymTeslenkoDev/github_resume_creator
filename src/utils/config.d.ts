// config.d.ts

interface Config {
  isDev: boolean;
  github: {
    apiUrl: string;
    accessToken?: string;
  };
}

declare const config: Config;
export default config;
