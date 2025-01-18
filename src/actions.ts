import { Task } from 'wasp/entities'
import { CreateTask, UpdateTask } from 'wasp/server/operations'

type CreateTaskPayload = Pick<Task, 'description'>
type UpdateTaskPayload = Pick<Task, 'id' | 'isDone'>

export const createTask: CreateTask<CreateTaskPayload, Task> = async (
    args,
    context
) => {
    return context.entities.Task.create({data: {description: args.description}})
}

export const updateTask: UpdateTask<UpdateTaskPayload, Task> = async (
    {id, isDone},
    context
) => {
    return context.entities.Task.update({where: {id}, data: {isDone: isDone}})
}