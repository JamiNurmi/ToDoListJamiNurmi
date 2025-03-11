import React, { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';

ModuleRegistry.registerModules([AllCommunityModule]);

function TodoTable(props) {
    const gridRef = useRef();
    const todos = props.todos;
    const columnDefs = [
        { headerName: "Description", field: "desc", sortable: true, filter: true },
        { headerName: "Priority", field: "priority", sortable: true, filter: true, cellStyle: params => params.value === "High" || "high" ? { color: 'red' } : { color: 'black' } },
        { headerName: "Due Date", field: "date", sortable: true, filter: true }
    ];

    return (
        <div className="ag-theme-alpine" style={{ width: 700, height: 500 }}>
            <AgGridReact
                ref={gridRef}
                onGridReady={params => gridRef.current = params.api}
                rowData={todos}
                columnDefs={columnDefs}
                rowSelection="single"
            />
        </div>
    );
}

export default TodoTable;