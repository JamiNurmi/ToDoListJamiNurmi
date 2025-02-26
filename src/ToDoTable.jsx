import React from "react";
import "./app.css"; // Varmista, että tyylitiedosto on olemassa

function TodoTable({ todos, deleteTodo }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.length === 0 ? (
                    <tr>
                        <td colSpan="3" style={{ textAlign: "center", padding: "10px" }}>
                            Ei vielä tehtäviä
                        </td>
                    </tr>
                ) : (
                    todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td>
                                <button
                                    className="delete"
                                    type="button"
                                    onClick={() => deleteTodo(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default TodoTable;
