import React, { useEffect, useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import { useParams } from 'react-router-dom'
import CardStagaire from '../components/cards/CardBlog';

export default function ShowStaigaires() {
    const {id} = useParams();

    const[user, setUser]= useState ([]);
    
    const[error, setError]= useState (null);
    const[IsLoading, setIsLoading]= useState (false);

    const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
   
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
                <p>Nom: {user.name}</p>
                <p>Pseudo: {user.username}</p>
                <p>Telephone: {user.phone}</p>
                <p>Email: {user.email}</p>
                <p>Site: {user.website}</p>
                <div>
                  <p>Adresse</p>
                  <p>Ville: {user.address.city}</p>
                  <p>Rue: {user.address.street}</p>
                  <p>Code Postal: {user.address.zipcode}</p>
                </div>
                  {/*<div>
                      <img src="/img/arizona.jpeg" alt={`Goat ${post.title}` } className='' />
                  </div>
                  <h1 className="font-bold text-4xl">{post.title}</h1>
        <p>{post.body}</p>*/}
              </div>
          </Layouts>    
    )
  }
}