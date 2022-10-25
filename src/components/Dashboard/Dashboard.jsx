import {useSelector} from "react-redux";
import {TodoItem} from "../todoItem/TodoItem";
import {useMemo} from "react";
import styles from "./style.module.scss"
import AddNewNote from "../AddNewNote/AddNewNote";
import {useDrop} from "react-dnd";
import {useActions} from "../../hooks";

export const Dashboard = (status) => {

    const [, drop] = useDrop({
        accept: 'First type',
        drop: () => ({name: status.status}),
    })

    const {todos} = useSelector(state => state.todos)


    const todosList = useMemo(() => {
        return todos ?
            todos.filter(todo => todo.status === status.status).map(todo =>
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                />
            ) : ''
    }, [todos])

    return (
        <div ref={drop} className={styles.todoList}>
            <h2 className={styles.title}>{status.status}</h2>
            {todosList}

            {<AddNewNote status={status.status}/>}
        </div>
    )
}