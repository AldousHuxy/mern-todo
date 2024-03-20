import { createLazyFileRoute } from '@tanstack/react-router'
import { useGetAllTodosQuery } from '../api/todos/useGetAllTodosQuery'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { TodoItem } from '../components/TodoItem'
import { TodoForm } from '../components/TodoInput'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    const { data: todos, isLoading } = useGetAllTodosQuery()

    if (isLoading) return

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>Todo List</Typography>
            <TodoForm />
            {todos.map(todo => <TodoItem key={todo._id} {...todo} />)}
        </Paper>
    )
}