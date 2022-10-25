import React, {useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import MySelect from "../../UI/MySelect/MySelect";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from "./style.module.scss";
import {useActions} from "../../hooks";


const NoteForm = (props) => {
    const {todos} = useSelector(state => state.todos)
    const [edit, setEdit] = useState('')
    const {setTodos} = useActions()

    const find = () => {
        const todo = todos.find(todo => todo.id === Number(props.id))
        return todo
    }
    const [selVal, setSelVal] = useState(find().status)
    const editNote = (e) => {
        e.preventDefault()
        const newTodos = todos.map(el => {
            return el.id === Number(props.id) ? {...el, title: edit ? edit : el.title, status: selVal} : el
        })

        setTodos(newTodos)
        setEdit('')
    }
    const navigate = useNavigate();
    const deleteNote = (e) => {
        e.preventDefault()
        const newTodos = todos.filter(el => el.id !== Number(props.id))
        setTodos(newTodos)
        navigate('/');
    }

    const home = () => {
        navigate('/')
    }

    return (
        <div>
            <form>
                <MyInput
                    value={edit}
                    onChange={e => setEdit(e.target.value)}
                    type="text"
                    placeholder="Edit note"
                />
                <MyButton onClick={editNote}>Accept</MyButton>
                <MyButton onClick={deleteNote}>Delete</MyButton>
                <MyButton onClick={home}>Home</MyButton>

                <MySelect value={selVal} onChange={e => setSelVal(e.target.value)} name="select">
                    <option value={'To do'}>To do</option>
                    <option value={'Doing'}>Doing</option>
                    <option value={'Done'}>Done</option>
                </MySelect>
            </form>
        </div>
    );
};

export default NoteForm;