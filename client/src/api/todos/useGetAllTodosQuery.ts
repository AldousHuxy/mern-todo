import { useQuery } from "@tanstack/react-query"
import { axiosClient } from "../axios"
import { AxiosResponse } from "axios"
import { Todo } from "../../types/todo"

export const useGetAllTodosQuery = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: async () => (await axiosClient.get<never, AxiosResponse<Todo[], Error>, unknown>('/todos')).data,
        initialData: [] as Todo[]
    })
}