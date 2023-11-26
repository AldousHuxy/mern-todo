import { useRef } from 'react';
import { Container } from 'react-bootstrap';

// TanStack Queries and Mutations
import { useGetTodosQuery } from './api/hooks/useGetTodosQuery';
import { useUpdateTodoMutation } from './api/hooks/useUpdateTodoMutation';
import { useDeleteTodoMutation } from './api/hooks/useDeleteTodoMutation';
import { useCreateTodoMutation } from './api/hooks/useCreateTodoMutation';

// React Components
import { TodoItem } from './components/TodoItem';
import { TodoInput } from './components/TodoInput';
import { TodoFooter } from './components/TodoFooter/TodoFooter';

const App = () => {
  const textRef = useRef<HTMLInputElement>(null)
  const { data: todos } = useGetTodosQuery()
  const { mutate: updateTodo } = useUpdateTodoMutation()
  const { mutate: deleteTodo } = useDeleteTodoMutation()
  const { mutate: createTodo } = useCreateTodoMutation(textRef)

  return (
    <Container>
      <h1 className="text-center my-3">My Todo List</h1>
      <TodoInput textRef={textRef} createTodo={createTodo} />
      {todos.map(todo => (
        <TodoItem
          key={todo._id} {...todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <TodoFooter todosLength={todos.length} />
    </Container>
  )
}

export default App;