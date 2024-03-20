import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Todo } from '../models/todoModel';

// @route   GET /api/todos
// @desc    Get All Todos
// @access  Public
export const getAllTodos = asyncHandler(async (req: Request, res: Response) => {
    const todos = await Todo.find()

    res.json(todos).status(200)
})

// @route   POST /api/todos
// @desc    Add New Todo
// @access  Public
export const addNewTodo = asyncHandler(async (req: Request, res: Response) => {
    const { text } = req.body

    if (!text) {
        res.status(400)
        throw new Error('Please add text field')
    }

    const todo = await Todo.create({ text })

    res.json(todo).status(200)
})

// @route   PUT /api/todos/:id
// @desc    Edit Todos By Id
// @access  Public
export const editTodoById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params

    const todo = await Todo.findById(id)

    if (!todo) {
        res.status(400)
        throw new Error('Todo not found')
    }

    const editedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true })

    res.json(editedTodo).status(200)
})

// @route   DELETE /api/todos/:id
// @desc    Remove Todos By Id
// @access  Public
export const removeTodoById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params

    const todo = await Todo.findById(id)

    if (!todo) {
        res.status(400)
        throw new Error('Todo not found')
    }

    await Todo.deleteOne()

    res.json(id).status(200)
})