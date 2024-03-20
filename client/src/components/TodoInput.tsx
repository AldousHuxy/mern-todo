import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useAddNewTodoMutation } from '../api/todos/useAddNewTodoMutation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TodoFormData } from '../types/todo';

export const TodoForm = () => {
    const { register, handleSubmit, reset } = useForm<TodoFormData>()
    const { mutate: addNewTodo  } = useAddNewTodoMutation()
    const onSubmit: SubmitHandler<TodoFormData> = (data) => {
        addNewTodo(data)
        reset({ text: '' })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='row' gap={3} marginBottom={3}>
                <TextField {...register('text')} label='e.g. Buy groceries' variant='filled' fullWidth />
                <Button variant='contained' type='submit'>Add New</Button>
            </Stack>
        </form>
    )
}