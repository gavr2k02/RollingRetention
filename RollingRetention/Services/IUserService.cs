using System.Collections.Generic;

using RollingRetention.Data;
using RollingRetention.Models;

namespace RollingRetention.Services
{
    public interface IUserService
    {
        public IEnumerable<User> GetAllUsers();

        public bool AddUser(User user);

        public bool AddUsers(IEnumerable<User> users);
    }
}