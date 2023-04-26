import React from 'react'

export default function TableBody({ users}) {
  return (
  
        <tbody>
            { users.map((item) =>(
                <tr key={item.id}>
                    <th className='w-1/4'>Id</th>
                    <th className='w-1/4'>Nom</th>
                    <th className='w-1/4'>email</th>
                    <th className='w-1/4'>Phone</th>
                </tr>
            ))}
        </tbody>

  )
}
