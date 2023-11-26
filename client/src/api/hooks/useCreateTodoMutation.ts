import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axiosClient } from "../axios"
import { RefObject } from "react"

export const useCreateTodoMutation = (textRef: RefObject<HTMLInputElement>) => {
    const queryClient = useQueryClient()
    
    return useMutation<Response, unknown, { text: string }>({
        mutationKey: ['todos'],
        mutationFn: (data) => axiosClient.post(`/todos`, data), 
        onSettled: () => {
            queryClient.refetchQueries()
            textRef.current!.value = ''
        }
    })
}