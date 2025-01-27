import React from "react";

const filmeInicial = {
  id: 0,
  titulo: '',
  prioridade: 0,
  descricao: ''
}

export default function FilmeForm(props) {

  function filmeAtual(){
    if (props.FilmeSelecionado.id !== 0){
      return props.FilmeSelecionado;

    }else {
        return filmeInicial;
    }
  }




  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label className="form-label">Título</label>
        <input id="titulo" className="form-control" type="text" />
      </div>

      <div className="col-md-6">
        <label className="form-label">Nota</label>
        <select id="nota" className="form-select">
          <option defaultValue="0">Selecionar...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="col-md-12">
        <label className="form-label">Descrição</label>
        <textarea id="descricao" className="form-control" type="text" />
      </div>
      <div className="col-12">
        <button
          onClick={props.addFilmes}
          type="button"
          className="btn btn-primary"
        >
          + Filme
        </button>
      </div>
    </form>
  );
}
