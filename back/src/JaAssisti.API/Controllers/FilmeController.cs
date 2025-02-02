using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JaAssisti.API.Data;
using JaAssisti.API.Models;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;

namespace JaAssisti.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilmeController : ControllerBase
    {
        private readonly DataContext _context;

         public FilmeController(DataContext context)
         {
            _context = context;
            
         }


        [HttpGet]
        public IEnumerable<Filme> Get()
        {
            return _context.Filmes;
        }

        [HttpGet("{id}")]
        public Filme Get(int id)
        {
            return _context.Filmes.FirstOrDefault(film => film.Id == id);
        }

        [HttpPost]
        public IEnumerable<Filme> Post(Filme filme)
        {
            _context.Filmes.Add(filme);
            if (_context.SaveChanges() > 0)
                return _context.Filmes;
            else
                throw new Exception ("Filme não adicionado");

        }


        [HttpPut("{id}")]
        public Filme Put(int id, Filme filme)
        {
            if (filme. Id != id) throw new Exception ("Você está tentando atualizar o filme errado");
       
            _context.Update(filme);
            if (_context.SaveChanges() > 0)
                return _context.Filmes.FirstOrDefault(film => film.Id == id);
            else
                return new Filme();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            
            var filme = _context.Filmes.FirstOrDefault(film => film.Id == id);
            if (filme == null)
                throw new Exception ("Você está tentando deletar uma atividade inexistente");
            
            _context.Remove(filme);

            return _context.SaveChanges() > 0;

        }
    }
}