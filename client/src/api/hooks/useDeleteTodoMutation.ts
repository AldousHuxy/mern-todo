import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Todo } from "../../types/Todo"
import { axiosClient } from "../axios"

export const useDeleteTodoMutation = () => {
    const queryClient = useQueryClient()
    
    return useMutation<Response, unknown, Todo>({
        mutationKey: ['todos'],
        mutationFn: ({ _id }) => axiosClient.delete(`/todos/${_id}`), 
        onSettled: () => queryClient.refetchQueries()
    })
}