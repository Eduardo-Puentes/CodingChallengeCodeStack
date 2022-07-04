import { useEffect, useState } from 'react';

function Table() {
    const [tableData, setTableData] = useState("");

    function getUsers(){
        //Fetch API
        fetch('https://gorest.co.in/public/v2/users')
        .then(res => res.json())
        .then(users => 
                //Set filtered data into a table format
                setTableData(users.filter(user => user.status === 'active').map((item) => {
                    return (<tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                    </tr>)
                }))
            );
    }

    useEffect(() => {getUsers()})

    return (
        <div class="container">
            <div className="text-center mt-4 mb-4"><h1>Active Users</h1></div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
        </div>
    )
}

export default Table;