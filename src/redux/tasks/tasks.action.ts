import { Task } from "../../models/task"

export const addTask = (task: Task) => {
    return {
        type: "ADD_TASK",
        payload: task
    }
}
export const removeTask = (id: string) => {
    return {
        type: "REMOVE_TASK",
        payload: id
    }
}
export const updateTask = (task: Task) => {
    return {
        type: "UPDATE_TASK",
        payload: task
    }
}

