import { configureStore } from "@reduxjs/toolkit";
import taskSlice, { tasksSlice } from "./reducers/taskSlice";


export const store = configureStore({

    reducer: {tasks: taskSlice}
})

