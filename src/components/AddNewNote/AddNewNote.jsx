import React, {useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks";


const AddNewNote = (props) => {
    const {todos} = useSelector(state => state.todos)
    const {setTodos} = useActions()
    const [edit, setEdit] = useState('')

    const editNote = (e) => {
        e.preventDefault()
        const newTodos = [...todos, {id: todos[todos.length - 1].id + 1, title: edit, status: props.status}]
        setTodos(newTodos)
        setEdit('')
    }

    return (
        <div>
            <MyInput
                value={edit}
                onChange={e => setEdit(e.target.value)}
                type="text"
                placeholder="Edit note"
            />
            <MyButton onClick={editNote}>Add</MyButton>
        </div>
    );
};

export default AddNewNote;