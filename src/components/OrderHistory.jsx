import React, {useState, useEffect} from 'react'
// import {useTable} from 'react-table';

function OrderHistory(props) {
    


    const [historyData, setHistoryData] = useState([]);




    useEffect(() =>{
        fetchData();
        async function fetchData(){
            const url = "http://localhost:5000/api/order/history";
            const token = localStorage.getItem('auth-token');

            const result = await fetch(url, {
                method: 'GET',
                headers : {
                    'auth-token': `${token}`,
                    'Content-type': 'application/json'
                }
            });
            const data = await result.json();
            setHistoryData(data)
        }
    }, [])






    return (props.trigger) ? (
        <div className="checkout-page">
            <div className="checkout">
                {
                    historyData.history.map((data, value) => {
                        return (
                            <p key={value}>{data.username} {data.type}</p>
                        )
                    })
                }
            </div>
        </div>
    ) : "";



























    // const columns = useMemo(() => COLUMNS, [])
    // const data = useMemo(() => props.history_data, []);


    // const COLUMNS = [
    //     {
    //         Header: 'Date', 
    //         accessor: 'order_date'
    //     },
    //     {
    //         Header: 'User',
    //         accessor: 'username'
    //     },
    //     {
    //         Header: 'Type',
    //         accessor: 'type'
    //     }
    // ]

    // const tableInstance = useTable({
    //     columns,
    //     data
    // })

    // const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance



    // return (
    //     <div>
    //         {/* <table {...getTableBodyProps()}>
    //             <thead>
    //                 {
    //                     headerGroups.map((headerGroup)=>{
    //                         <tr {...headerGroup.getHeaderGroupProps()}>
    //                             {
    //                                 headerGroup.headers.map(column => (
    //                                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
    //                                 ) )
    //                             }
    //                         </tr>
    //                     })
    //                 }
    //             </thead>
    //             <tbody {...getTableBodyProps}>
    //                 {
    //                     rows.map((row)=>{
    //                         prepareRow(row)
    //                         return(
    //                             <tr {...row.getRowProps()}>
    //                                 {
    //                                     row.cells.map((cell)=>{
    //                                         return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
    //                                     })
    //                                 }
    //                             </tr>
    //                         )
    //                     })
    //                 }
    //                 <tr>
    //                     <td></td>
    //                 </tr>
    //             </tbody>
    //         </table> */}
    //     </div>
    // )
}

export default OrderHistory
