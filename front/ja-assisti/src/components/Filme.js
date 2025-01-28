import React from 'react'

export default function Filmes(props) {
  return (
    <div key={props.film.id} className="card mb-2 shadow-sm" >
              
    <div className="card-body">

          <div className="d-flex justify-content-between">
             <h5 className="card-title">
                <span className='badge  bg-secondary me-1'> {props.film.id}</span> {props.film.titulo} 
             </h5>
             <h6>
             {props.notaLabel(props.film.nota)} 
             </h6>
          </div>
          <p className="card-text">
             {props.film.descricao}
          </p>

          <div className="d-flex justify-content-end pt-2 border-top m-0">
            <button onClick={() => props.pegarFilme(props.film.id)} className='btn btn-outline-primary me-2 btn-sm'><i className='fas fa-pen me-2'></i> Editar </button>
            <button onClick={() => props.removerFilmes(props.film.id)} className='btn btn-outline-danger btn-sm'><i className='fas fa-trash me-2'></i> Deletar </button>
          
          </div>

    </div>
</div>
  )
}
