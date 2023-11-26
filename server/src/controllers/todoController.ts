import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import { Todo } from '../models/todoModel'

// @desc    get all todos
// @route    GET /api/todos
// @access  Public
export const getAllTodos = asyncHandler(async (req: Request, res: Response) => {
    const todos = await Todo.find()

    res.status(200).json(todos)
})

// @desc    create todo
// @route    SET /api/todos/
// @access  Public
export const createTodo = asyncHandler(async (req: Request, res: Response) => {
    const todo = await Todo.create({
        text: req.body.text,
        active: req.body.active,
        done: req.body.done
    })
    
    res.status(200).json(todo)
})

// @desc    update all todo
// @route    PUT /api/todos/:id
// @access  Public
export const updateTodo = asyncHandler(async (req: Request, res: Response) => {
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
        res.status(400)
        throw new Error('goal not found')
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedTodo)
})

// @desc    delete todo
// @route    GET /api/todos/:id
// @access  Public
export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
        res.status(400)
        throw new Error('goal not found')
    }

    await todo.deleteOne()
    
    res.status(200).json({ id: req.params.id })
})