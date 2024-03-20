import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Todo } from "../types/todo"
import { useRemoveTodoByIdMutation } from "../api/todos/useRemoveTodoByIdMutation"
import { useEditTodoByIdMutation } from "../api/todos/useEditTodoByIdMutation"

type TodoItemProps = {} & Todo

export const TodoItem = ({ _id, text, completed }: TodoItemProps) => {
    const { mutate: editTodoById } = useEditTodoByIdMutation(_id)
    const { mutate: removeTodoById } = useRemoveTodoByIdMutation(_id)

    return (
        <Stack direction="row" gap={3} marginTop={3}>
            <Checkbox checked={completed} size="large" onClick={() => editTodoById({ completed: !completed })}/>
            <Typography variant="h4" component="label" marginInlineEnd="auto">{text}</Typography>
            <Button variant="outlined" color="error" onClick={() => removeTodoById()}>Delete</Button>
        </Stack>
    )
}