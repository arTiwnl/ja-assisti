import React from 'react'
import Filme from './Filme';

export default function FilmeLista(props) {
  return (
    <div className="mt-3">


    {props.filmes.map(film => (
       
   <Filme  
        film={film} 
        notaLabel={props.notaLabel} 
        removerFilmes={props.removerFilmes}
        pegarFilme={props.pegarFilme}
   />
   
         ))}




   </div>
  )
}
