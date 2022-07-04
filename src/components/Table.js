import { useEffect, useState } from 'react';

function Table() {
    const [tableData, setTableData] = useState("");
    const [isFiltered, setIsFiltered] = useState(true);
    
    function getUsers(){
        //Fetch API
        fetch('https://gorest.co.in/public/v2/users')
        .then(res => res.json())
        .then(users => 
                //Set filtered data into a table format
                setTableData(users.filter(user => user.status === 'active' || isFiltered).map((item) => {
                    return (<tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.status}</td>
                    </tr>)
                }))
            );
    }

    const handleChange = () => {
        setIsFiltered(e => !e);
      };

    useEffect(() => {getUsers()})

    return (
        <div class="container">
            <div className="text-center mt-4 mb-4"><h1>Users List</h1></div>
            <div>
      <label>
        <input
          type="checkbox"
          value={isFiltered}
          onChange={handleChange}
          id="subscribe"
          name="subscribe"
        />
        Filter Active
      </label>
    </div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
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