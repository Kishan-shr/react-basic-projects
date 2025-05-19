import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState ={
    todos:[{id:1,Text:"Hello world"}]
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
addTodo:sayHello,
addTodo:(state,action)=>{
    const todo = {id:nanoid(),
        text:action.payload
    }
    state.todos.push(todo)
},  // this has two things state and action
removeTodo:(state,action)=>{
    state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
}, // this also has two things state and action
}
})

export const {addTodo,removeTodo}= todoSlice.actions
export default todoSlice.reducer