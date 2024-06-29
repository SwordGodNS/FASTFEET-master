import './Table.css';

const Table = ({columns, data, title}) => {
    return (
            <table className="customTable">
                <thead>
                    {/* {columns?.length > 0 ?
                        
                            <th colSpan={columns?.length + 1} id="tableTitle">
                                {title}
                            </th>
                         : null} */}
                    {columns.map((column, index) => (
                                <th key={index}>
                                    {column.toUpperCase()}
                                </th>
                    ))}
                </thead>
                <tbody>
                    {data.map((row) => {
                        return (
                            <tr key={row.id}>
                                {row.destinatario.nome} 
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    );
}

export default Table






















