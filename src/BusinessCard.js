import React from 'react'

const BusinessCard = ({ user }) => {
  return (
    <div className='Card'>
      <div className='txt'>
        <div>
          <h3>Name: </h3> <h4>{user.name}</h4>
        </div>
        <div>
          <h3>Company: </h3> <h4>{user.company.name}</h4>
        </div>
        <div>
          <h4>Email: </h4>
          <h5>{user.email}</h5>
        </div>
        <div>
          <h4>Address: </h4>{' '}
          <h5>
            {user.address.street}, {user.address.suite}, {user.address.city},{' '}
            {user.address.zipcode}
          </h5>
        </div>
        <div>
          <h4>Phone Number: </h4> <h5>{user.phone}</h5>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard
