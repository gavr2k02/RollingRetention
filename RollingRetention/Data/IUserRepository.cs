using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RollingRetention.Models;

namespace RollingRetention.Data
{
    public interface IUserRepository
    {
        public IEnumerable<User> GetUsers();

        public bool AddUser(User user);

        public bool AddUsers(IEnumerable<User> users);
    }
}