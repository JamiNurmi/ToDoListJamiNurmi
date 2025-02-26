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

    // Funktio, joka poistaa tehtävän
    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    return (
        <div className="todo-container">
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
            <button type="button" onClick={addTodo}>Add</button>

            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default TodoList;
