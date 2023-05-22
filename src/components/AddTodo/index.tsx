import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../stores/modules/todosSlice.ts";

export default function AddTodo() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
        event.preventDefault();
        if (!value) {
            return;
        }

        dispatch(
            addTodo({
                title: value,
            })
        );

        // Reset value
        setValue('');
    };
    
    const handleInput = (event: any) => {
        event.preventDefault();
        const value = event.target.value || '';
        if (!value) {
            return;
        }

        setValue(value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='thêm...'
                value={value}
                onChange={handleInput}>
            </input>

            <button type='submit'>
                Thêm
            </button>
        </form>
    );
}
