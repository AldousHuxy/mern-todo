import { model, Schema } from 'mongoose'

interface ITodo extends Document {
    text: string
    active: boolean
    done: boolean
}

const todoSchema = new Schema<ITodo>({
    text: { type: String, required: true },
    active: { type: Boolean },
    done: { type: Boolean }
})

export const Todo = model('Todo', todoSchema)