﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VerhuisHulp.Models
{
    public class TodoItem
    { 
        [Key]
        public string Id { get; set; }

        //[Required]
        public string Description { get; set; }
        public bool IsDone { get; set; }
    }
}
