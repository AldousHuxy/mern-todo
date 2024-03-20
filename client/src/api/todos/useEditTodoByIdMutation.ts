import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axiosClient } from "../axios"
import { Todo, TodoId, TodoToggleData } from "../../types/todo"
import { AxiosResponse } from "axios"

export const useEditTodoByIdMutation = (id: TodoId) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['todos'],
        mutationFn: async (toggleData: TodoToggleData) => (await axiosClient.put<TodoToggleData, AxiosResponse<Todo, Error>, unknown>(`/todos/${id}`, toggleData)).data,
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    })
}