type TodoFooterProps = {
    todosLength: number
}

export const TodoFooter = ({ todosLength }: TodoFooterProps) => {
    if (todosLength === 0) return
    return (
        <>
            {
                todosLength === 1
                    ? `${todosLength} task left`
                    : `${todosLength} tasks left`
            }
        </>
    )
}