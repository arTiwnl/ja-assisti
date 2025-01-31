using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JaAssisti.API.Models
{
    public class Filme
    {

        public int Id { get; set; }

        public string Titulo { get; set; }

        public string Descricao { get; set; }

        public string Nota { get; set; }



        public Filme() { }

        public Filme(int id) 
        { 

            Id = id;
        }

        
    }
}