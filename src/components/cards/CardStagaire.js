import React from 'react'
import { Link } from 'react-router-dom'
import TableHead from '../table/TableHead'
import TableBody from '../table/TableBody'

export default function CardStagaire({users }) {
  return (
    <div>
    
        <table class="table-auto w-full">
            <TableHead />
            <TableBody users={users} />
        </table>
     </div> 
  )
}  
    


