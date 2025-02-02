using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JaAssisti.API.Models;
using Microsoft.EntityFrameworkCore;

namespace JaAssisti.API.Data
{
    public class DataContext : DbContext //Ativa o contexto do EF 
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Filme> Filmes/*NomeDaTabela*/ { get; set; } //Coleção de atividade 
        
    }
}