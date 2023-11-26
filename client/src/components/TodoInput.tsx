import { UseMutateFunction } from "@tanstack/react-query"
import { RefObject } from "react"
import { Button, Form, Stack } from "react-bootstrap"

type TodoInputProps = {
    textRef: RefObject<HTMLInputElement>
    createTodo: UseMutateFunction<Response, unknown, { text: string }, unknown>
}

export const TodoInput = ({ textRef, createTodo }: TodoInputProps) => {
    return (
        <Stack direction="horizontal" gap={2}>
            <Form.Control type="text" ref={textRef} placeholder="Enter a new todo item..." />
            <Button
                variant="success"
                onClick={() => createTodo({ text: textRef.current?.value ?? '' })}
            >
                Add
            </Button>
        </Stack>
    )
}