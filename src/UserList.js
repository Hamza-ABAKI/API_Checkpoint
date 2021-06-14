import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BusinessCard from './BusinessCard'

const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        setUsers(result.data)
      } catch (error) {
        console.log(error.response.data)
      }
    }
    getData()
  }, [])
  return (
    <div className='userlist'>
      {users.map((user) => {
        return <BusinessCard key={user.id} user={user} />
      })}
    </div>
  )
}

export default UserList
