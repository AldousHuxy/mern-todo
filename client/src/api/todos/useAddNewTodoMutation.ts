import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axiosClient } from "../axios"
import { AxiosResponse } from "axios"
import { Todo, TodoFormData } from "../../types/todo"

export const useAddNewTodoMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['todos'],
        mutationFn: async (formData: TodoFormData) => (await axiosClient.post<TodoFormData, AxiosResponse<Todo, Error>, unknown>('/todos', formData)).data,
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    })
}