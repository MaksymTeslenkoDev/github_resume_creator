import * as React from 'react';

export interface AppContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<any>>;
}

export const AppContext: React.Context<AppContextType | undefined>;

export const AppProvider: React.FC<{ children: React.ReactNode }>;

export function useAppContext(): AppContextType;
