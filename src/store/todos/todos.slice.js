import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos(state, action) {
            if (action.payload) {
                state.todos = action.payload
                localStorage.setItem('state', JSON.stringify(state.todos))
            }
        }
    }
})

const todosAction = todosSlice.actions
const todosReducer = todosSlice.reducer

export {todosSlice, todosAction, todosReducer}