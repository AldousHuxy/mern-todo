import { Button, Card, Form, Stack } from "react-bootstrap"
import { Todo } from "../types/Todo"
import { UseMutateFunction } from "@tanstack/react-query"

type TodoItemProps = {
    updateTodo: UseMutateFunction<Response, unknown, Todo, unknown>
    deleteTodo: UseMutateFunction<Response, unknown, Todo, unknown>
} & Todo

export const TodoItem = ({ _id, text, active, done, updateTodo, deleteTodo }: TodoItemProps) => {
    const todo: Todo = { _id, text, active, done }
    
    return (
        <Card className="p-2 my-2 bg-secondary">
            <Stack direction="horizontal">
                <Form.Check
                    type="checkbox"
                    className="fw-bold text-white"
                    checked={done}
                    label={text}
                    onChange={() => updateTodo({ ...todo, done: !done })}
                />
                <Button
                    variant="danger" 
                    className="ms-auto"
                    onClick={() => deleteTodo(todo)}
                >
                    Delete
                </Button>
            </Stack>
        </Card>
    )
}