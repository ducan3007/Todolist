
import { Task } from "../../models/task"


interface initType {
    tasks: Task[]
}

const initState: initType = {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]")
}
const save = (state: initType) => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    return state;
}
const tasksReducer = (state = initState, action: { type: string, payload: any }) => {
    let _state: initType;
    switch (action.type) {
        case "GET_TASKS":
            return state;
        case "ADD_TASK":
            _state = {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
            return save(_state);
        case "REMOVE_TASK":
            _state = {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
            return save(_state);
        case "UPDATE_TASK":
            _state = {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.id) return action.payload;
                    return task
                })
            }
            return save(_state);
        case "BULK_UPDATE_TASK":
            _state = {
                ...state,
                tasks: action.payload
            }
            return save(_state);
        default:
            return state;
    }
}
export default tasksReducer

