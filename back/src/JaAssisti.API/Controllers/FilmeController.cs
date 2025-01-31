using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 
using JaAssisti.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace JaAssisti.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilmeController : ControllerBase
    {

        public IEnumerable<Filme> Filmes = new List<Filme>() { 
                new Filme(1),
                new Filme(2),
                new Filme(3)
            };
         

        [HttpGet]
        public IEnumerable<Filme> Get()
        {
            return Filmes;
        }

        [HttpGet("{id}")]
        public Filme Get(int id)
        {
            return Filmes.FirstOrDefault(film => film.Id == id);
        }

        [HttpPost]
        public IEnumerable<Filme> Post(Filme filme)
        {
            return Filmes.Append<Filme>(filme);
        }


        [HttpPut("{id}")]
        public string Put(int id)
        {
            return "Meu primeiro método put";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return "Meu primeiro método Delete";
        }
    }
}