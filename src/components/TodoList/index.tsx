import { useSelector } from 'react-redux';
import TodoItem from "../TodoItem";
import {ITodo} from "../../types/todo.ts";

export default function TodoList() {
    const todos = useSelector((state: any) => state.todos || []);

    return (
        <ul>
            {todos.map((todo: ITodo) => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>
    );
}
