import { UiProvider } from "@/context/ui_context";
// import { ThemeProvider } from './theme-provider';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import React from 'react';

interface ProvidersProps {
    children: React.ReactNode;
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: Infinity,
        },
    },
});

const Providers = ({ children }: ProvidersProps) => {
    return (
        <UiProvider>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </UiProvider>
    );
};

export default Providers;
