import { useState } from "react";
import TodoTable from "./ToDoTable";

function TodoList() {
    // Declare states
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [todos, setTodos] = useState([]);

    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const addTodo = () => {
        if (desc.trim() && date) {
            setTodos([...todos, { description: desc, date: date }]);
            setDesc("");
            setDate("");
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Description"
                onChange={handleDescChange}
                value={desc}
            />
            <input
                type="date"
                onChange={handleDateChange}
                value={date}
            />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} />
        </>
    );
}

export default TodoList;
