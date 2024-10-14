import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import config from '../../utils/config';

// Initialize the QueryClient with default options
const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
        onError: (error) => {
          // eslint-disable-next-line
          console.error('Global Query Error:', error);
        },
      },
      mutations: {
        retry: 1,
        onError: (error) => {
          // eslint-disable-next-line
          console.error('Global Mutation Error:', error);
        },
      },
    },
  });

export function AppQueryClientProvider({ children }) {
  const [queryClient] = React.useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {config.isDev && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
