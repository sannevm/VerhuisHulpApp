﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VerhuisHulp.Models
{
    public class DeadlineItem
    {
        [Key]
        public string Id { get; set; }

        public string Description { get; set; }
        public DateTime Date { get; set; }
        public ICollection<TodoItem> TodoItems { get; set; }
    }
}
