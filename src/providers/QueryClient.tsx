'use client';

import React, {FC, ReactNode} from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

interface QueryClientProps {
    children: ReactNode
}

const queryClient = new QueryClient();

const Provider: FC<QueryClientProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            { children }
        </QueryClientProvider>
    )
}
export default Provider;
