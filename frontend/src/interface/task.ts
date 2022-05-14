type TaskStatus = "TODO" | "DOING" | "DONE" | "STUCK"

export type Task = {
    status: TaskStatus,
    name: string,
    description?: string
    dueDate?: Date
}
