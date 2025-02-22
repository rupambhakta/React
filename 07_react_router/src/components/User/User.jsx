import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-amber-500 text-4xl text-center py-5'>
      User : {userid}
    </div>
  )
}

export default User
