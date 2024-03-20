import z from 'zod';

const OBJECTID_LEN: number = 24
const TEXT_LEN: number = 5

const todoSchema = z.object({
    _id: z.string().length(OBJECTID_LEN),
    text: z.string().min(TEXT_LEN),
    completed: z.boolean(),
})

const todoFormData = z.object({
    text: z.string().min(TEXT_LEN)
})

const todoToggleData = z.object({
    completed: z.boolean()
})

export type TodoId = string
export type TodoFormData = z.infer<typeof todoFormData>;
export type TodoToggleData = z.infer<typeof todoToggleData>;
export type Todo = z.infer<typeof todoSchema>;