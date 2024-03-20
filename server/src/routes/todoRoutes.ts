import { Router } from 'express';
import { addNewTodo, editTodoById, getAllTodos, removeTodoById } from '../controllers/todoController';

export const router: Router = Router()

router.route('/')
    .get(getAllTodos)
    .post(addNewTodo)

router.route('/:id')
    .put(editTodoById)
    .delete(removeTodoById)