import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import NoteForm from "../../components/NoteForm/NoteForm";

export const Todo = () => {
    const {id} = useParams()
    const {todos} = useSelector(state => state.todos)
    const [todo, setTodo] = useState()


    const find = () => {
        const todo = todos.find(todo => todo.id === Number(id))
        return todo
    }
    useEffect(() => {
        if (todos && todos.length) {
            const todo = find()
            setTodo(todo)
        }
    }, [todos])

    return (
        <div>
            {todo && todo.title}
            <NoteForm id={id}/>

        </div>
    )
}