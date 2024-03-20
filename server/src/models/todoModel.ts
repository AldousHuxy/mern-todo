import { model, Schema } from "mongoose"

interface ITodo {
    text: string
    completed: boolean
}

export const Todo = model('Todo', new Schema<ITodo>({
    text: { type: String, required: [true, 'Please add text field'] },
    completed: { type: Boolean, default: false }
}))