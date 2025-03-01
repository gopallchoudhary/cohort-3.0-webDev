import React, { useEffect, useState } from 'react'
import { getUsers } from './User.js'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            const data = await getUsers()
            setUsers(data)

        }
        fetchUsers()
    }, [])
    console.log(users);



    return (
        <div>
            <h1>Users List</h1>
            {users.map((user) => {
                return <div key={user._id}>
                    <p>{user.firstName}</p>
                    <p>{user.email}</p>
                    <p>{user.lastName}</p>
                </div>
            })}
        </div>
    )
}

export default Users