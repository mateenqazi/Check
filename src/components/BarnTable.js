import React from 'react'
import search_icon from '../assets/images/Search.svg'
import { useTable, useGlobalFilter, useAsyncDebounce } from "react-table"


function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div className="barn-header">
            <h3>Barn Overwiew</h3>
            <div className="search-box">
                <img src={search_icon} alt="" />
                <input value={value || ""} onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                    placeholder='Search Barns' />
            </div>
        </div>
    )
}

export default function BarnTable({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state,
        preGlobalFilteredRows,
        setGlobalFilter, }
        = useTable({ columns, data, }, useGlobalFilter)
    return (
        <>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}
