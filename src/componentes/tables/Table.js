import './Table.css';

const Table = ({columns, data, title}) => {
    return (
        <div className="tableContainer">
            {title && <h2 id="tableTitle">{title}</h2>}
            <table className="customTable">
                <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>
                            {column.toUpperCase()}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.destinatario.nome}</td>
                        <td>{row.destinatario.telefone}</td>
                        <td>{row.destinatario.rua}</td>
                        <td>{row.destinatario.numero}</td>
                        <td>{row.destinatario.complemento}</td>
                        <td>{row.destinatario.CEP}</td>
                        <td>{row.entregue ? 'Entregue' : 'Não entregue'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table