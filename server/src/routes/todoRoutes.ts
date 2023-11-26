import { Router } from 'express';
import { createTodo, deleteTodo, getAllTodos, updateTodo } from '../controllers/todoController';

export const router: Router = Router()

router.route('/')
    .get(getAllTodos)
    .post(createTodo)

router.route('/:id')
    .put(updateTodo)
    .delete(deleteTodo)