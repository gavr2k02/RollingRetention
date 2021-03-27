using System;
using System.ComponentModel.DataAnnotations;

namespace RollingRetention.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public DateTime DateRegistration { get; set; }

        [Required]
        public DateTime DateLastActivity { get; set; }
    }
}