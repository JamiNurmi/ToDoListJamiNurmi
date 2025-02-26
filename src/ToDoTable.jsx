import React from "react";
import PropTypes from "prop-types";
import "./app.css"; // Varmista, että tyylitiedosto on olemassa

function TodoTable({ todos }) {
    return (
        <table className="todo-table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {todos.length > 0 ? (
                    todos.map((item, index) => (
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="2">No tasks added</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

// PropTypes-tarkistus
TodoTable.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default TodoTable;
