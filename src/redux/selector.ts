import { Task } from "../models/task";


export const getTasks = (state: any) => state.tasks;

export const filterTask = (search: string) => (state: any) => state.tasks.map((task: Task) => {
    if (task.title.toLowerCase().includes(search.toLowerCase())) {
        return task;
    }
});