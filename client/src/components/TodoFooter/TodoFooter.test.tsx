import { render, screen } from '@testing-library/react';
import { TodoFooter } from './TodoFooter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

describe('Todo Footer', () => {
    it('displays "task" when remaining tasks is one', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <TodoFooter todosLength={1} />
            </QueryClientProvider>
        )
        const tasksLeft = screen.queryByText(/1 task left/i)
        expect(tasksLeft).toBeVisible()
    })
    
    it('displays "tasks" when remaining tasks more than one', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <TodoFooter todosLength={4} />
            </QueryClientProvider>
        )
        const tasksLeft = screen.queryByText(/4 tasks left/i)
        expect(tasksLeft).toBeVisible()
    })
})