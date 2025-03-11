// Import useState and useRef from react
import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import TodoTable from "./TodoTable";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

function TodoList() {
    // Declare states
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("");
    const [date, setDate] = useState("");
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const [columnDefs] = useState([
        { field: "desc", sortable: true, filter: true },
        {
            field: "priority", sortable: true, filter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        },
        { field: "date", sortable: true, filter: true }
    ]);

    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const addTodo = (event) => {
        event.preventDefault();
        if (desc === "" || priority === "" || date === "") {
            alert("All fields must be filled!");
            return;
        }
        setTodos([...todos, { desc, priority, date }]);
        setDesc("");
        setPriority("");
        setDate("");
    };

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Select a row first!');
        }
    };

    return (
        <div>
            <div className="inputs">
                <input
                    placeholder="Description"
                    onChange={handleDescChange}
                    value={desc} />
                <input
                    placeholder="Priority"
                    onChange={handlePriorityChange}
                    value={priority} />
                <input
                    placeholder="Date"
                    type="date"
                    onChange={handleDateChange}
                    value={date} />
            </div>
            <div className="buttons">
                <button onClick={addTodo}>Add</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <TodoTable todos={todos} />
        </div>
    );
}

export default TodoList;