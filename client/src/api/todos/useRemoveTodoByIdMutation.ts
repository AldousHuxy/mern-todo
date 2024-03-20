import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axiosClient } from "../axios"
import { TodoId } from "../../types/todo"
import { AxiosResponse } from "axios"

export const useRemoveTodoByIdMutation = (id: TodoId) => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationKey: ['todos'],
        mutationFn: async () => (await axiosClient.delete<never, AxiosResponse<TodoId, Error>, unknown>(`/todos/${id}`)).data,
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    })
}