import {Link} from "react-router-dom";
import styles from './style.module.scss'
import {useDrag, useDrop} from "react-dnd";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks";
import {useRef} from "react";

export const TodoItem = ({id, title, index, moveCardHandler}) => {

    const {todos} = useSelector(state => state.todos)
    const {setTodos} = useActions()

    const changeItemColumn = (columnStatus) => {
        const newTodos = todos.map(el => {
            return el.id === Number(id) ? {...el, status: columnStatus} : el
        })

        setTodos(newTodos)
    }

    const [{isDragging}, drag] = useDrag({
        item: {index, name: title},
        type: 'First type',
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (dropResult) {
                const {name} = dropResult
                switch (name) {
                    case 'To do':
                        changeItemColumn('To do')
                        break
                    case 'Doing':
                        changeItemColumn('Doing')
                        break
                    case 'Done':
                        changeItemColumn('Done')
                        break
                    default:
                        break
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;


    return (
        <div ref={drag} className={styles.item} style={{opacity}}>
            <p className={styles.title}>
                {title}
            </p>

            <button className={styles.link}>
                <Link to={`todo/${id}`}>
                    Go to todo
                </Link>
            </button>
        </div>
    )
}