import { Task } from 'wasp/entities'
import { type GetTasks } from 'wasp/server/operations'

export const getTasks: GetTasks<void, Task[]> = async (AbortSignal, context) => {
    return context.entities.Task.findMany({
        orderBy: {id: 'asc'}
    })
}