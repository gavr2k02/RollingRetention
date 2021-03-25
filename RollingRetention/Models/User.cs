using System;

namespace RollingRetention.Models
{
    public class User
    {
        public int Id { get; set; }
        public DateTime DateRegistration { get; set; }
        public DateTime DateLastActivity { get; set; }
    }
}