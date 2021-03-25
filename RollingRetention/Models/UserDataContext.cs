using Microsoft.EntityFrameworkCore;

namespace RollingRetention.Models
{
    public class UserDataContext : DbContext
    {
        public UserDataContext(DbContextOptions<UserDataContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}