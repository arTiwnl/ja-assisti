import FilmeForm from "./components/FilmeForm";
import FilmeLista from "./components/FilmeLista";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialFilmes = [
    {
      id: 1,
      nota: 4,
      titulo: "Transformers 1",

      descricao: "Maneirinho",
    },
    {
      id: 2,
      nota: 4,
      titulo: "Transformers 2",

      descricao: "Maneirinho",
    },
  ];




  const [filmes, setFilmes] = useState(initialFilmes);
  const [movie, DefinirFilme] = useState();

  useEffect (() => {
      console.log('Use Effect funcionando');
  }, []); // [] para ele executar só uma vez


  function addFilmes(e) {
    e.preventDefault();

    const filme = {
      id: filmes.length + 1,
      nota: document.getElementById("nota").value,
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
    };

    setFilmes([...filmes, { ...filme }]);
  }

  function removerFilmes(id) {
    const filmesFiltrados = filmes.filter((filme) => filme.id !== id);
    setFilmes([...filmesFiltrados]);
  }

  function pegarFilme(id){
    const movie = filmes.filter((filme) => filme.id === id);
    DefinirFilme(movie[0]);
  }

  function notaLabel(param) {
    switch (param) {
      case "1":
        return "1 😭";

      case "2":
        return "2 ☹️";

      case "3":
        return "3 😐";

      case "4":
        return "4 🙂";

      case "5":
        return "5 🤩";

      default:
        return "Não definido";
    }
  }

  return (
    <>
      <FilmeForm 
      addFilmes={addFilmes} 
      FilmeSelecionado={movie}
      filmes={filmes} />

      <FilmeLista
        notaLabel={notaLabel}
        removerFilmes={removerFilmes}
        pegarFilme={pegarFilme}
        filmes={filmes}
      />
    </>
  );
}

export default App;
