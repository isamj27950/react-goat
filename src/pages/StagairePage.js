import React, { useState, useEffect } from 'react'
import Layouts from '../components/layouts/Layouts'
import CardStagaire from '../components/cards/CardStagaire';
import { Link } from 'react-router-dom';


export default function StagairePage() {
  const[user, setUser]= useState ([]);
  const[error, setError]= useState (null);
  const[IsLoading, setIsLoading]= useState (false); 
  
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect (() => {
    fetch(API_URL)
       .then((res) => res.json())
       .then(
       (result) => {
       setIsLoading(true);
       setUser(result);
    },
   //Capture les errreurs
   (error) => {
       setIsLoading(true);
       setError(error.message);
    },
    );
   },[]);

   if(!IsLoading){
       return (
         <Layouts> 
           <p className='text-red-500 text-center text-2xl'>
             En chargement je recupère la data ...
           </p>
         </Layouts>
       );
     } else if (error) {
         return (
           <Layouts>
             <p className='text-red-500 text-center text-2xl py-24'>Erreur : {error}</p>
           </Layouts>
         )
     }else{


  return (
    <Layouts> 
      <div className='px-24 py-20'>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className='w-1/3'>id</th>
                  <th className='w-1/3'>Nom</th>
                  <th className='w-1/3'>Email</th>
                  <th className='W-1/3'>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((item) =>(
                  
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                      <Link to={`/user/${item.id}`}>Voir</Link>
                      </td>
                    </tr>
                   
                  ))}
              </tbody>
                  </table>
      </div>
    </Layouts>  
   );
}
}