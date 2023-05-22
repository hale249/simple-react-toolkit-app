import { useDispatch } from 'react-redux';
import {ITodo} from "../../types/todo.ts";
import {deleteTodo, toggleComplete} from "../../stores/modules/todosSlice.ts";

export default function TodoItem(props: ITodo) {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({ id: props.id, completed: !props.completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id: props.id }));
    };
    return (
        <li>
            <div className="d-flex align-items-center p-5">
                <span className="d-flex align-items-center mr-10" style={{
                    textDecoration: props.completed ? 'line-through': ''
                }}>
                    <input
                        type='checkbox'
                        style={{
                            marginRight: '5px'
                        }}
                        onChange={handleCheckboxClick}
                        checked={props.completed}
                    ></input>
                    {props.title}
                </span>
                <button style={{ color: 'red'}} onClick={handleDeleteClick} >X</button>
            </div>
        </li>
    );
}
