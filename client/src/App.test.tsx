import { render, screen } from '@testing-library/react';

import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

describe('Todo List App', () => {
    it('displays a my todo list title', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        )
        const title = screen.queryByText(/My Todo List/i)
        expect(title).toBeVisible()
    })
})