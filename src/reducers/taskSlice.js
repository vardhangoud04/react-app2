import { createSlice } from "@reduxjs/toolkit";
import { Action } from "history";
import taskData from '../data/tasks.json'

const initialState = [...taskData]
export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
         addTasks: (action) => {
            return action.payloed
         },
         addTask: (state, action) => {
            return [...state, action.payload]
         },
         deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
         },
         updateTask: (action) => {
            return state.map(task => task.id === action.payload.id ? {...task, ...action.payload}: task)
         }

    }

})

export const {addTask, addTasks, deleteTask, updateTask} = taskSlice.actions


export default taskSlice.reducer
