import { Task } from 'wasp/entities'
import { type GetTasks } from 'wasp/server/operations'
import { HttpError} from 'wasp/server'

export const getTasks: GetTasks<void, Task[]> = async (AbortSignal, context) => {
    if (!context.user){
        throw new HttpError(401)
    }
    return context.entities.Task.findMany({
        where: {user: {id: context.user.id}},
        orderBy: {id: 'asc'}
    })
}