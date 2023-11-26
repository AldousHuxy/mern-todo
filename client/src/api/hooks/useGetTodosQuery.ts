import { useQuery } from "@tanstack/react-query"
import { Todo } from "../../types/Todo"
import { axiosClient } from "../axios"

export const useGetTodosQuery = () => {
    return useQuery<Todo[]>({
        queryKey: ['todos'],
        queryFn: async () => (await axiosClient.get<Todo[]>('/todos')).data,
        initialData: []
    })
}