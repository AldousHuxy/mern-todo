import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../../types/Todo";
import { axiosClient } from "../axios";

export const useUpdateTodoMutation = () => {
    const queryClient = useQueryClient()
    
    return useMutation<Response, unknown, Todo>({
        mutationKey: ['todos'],
        mutationFn: (todo) => axiosClient.put(`/todos/${todo._id}`, todo), 
        onSettled: () => queryClient.refetchQueries()
    })
}