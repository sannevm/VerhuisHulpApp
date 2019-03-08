using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VerhuisHulp.Models;

    public class VerhuisHulpContext : DbContext
    {
        public VerhuisHulpContext (DbContextOptions<VerhuisHulpContext> options)
            : base(options)
        {
        }

        public DbSet<VerhuisHulp.Models.TodoItem> TodoItem { get; set; }
    }
