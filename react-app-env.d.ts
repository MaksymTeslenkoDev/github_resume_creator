/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_ENV: 'development' | 'production' | 'test';
    readonly REACT_APP_GITHUB_API_URL: string;
    readonly REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN: string;
  }
}
