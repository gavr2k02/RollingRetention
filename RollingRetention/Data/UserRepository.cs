using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using RollingRetention.Models;

namespace RollingRetention.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly UserDataContext db;
        private readonly ILogger logger;

        public UserRepository(UserDataContext context, ILogger<UserRepository> logger)
        {
            db = context;
            this.logger = logger;
        }

        public bool AddUser(User user)
        {
            try
            {
                db.Users.Add(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return false;
            }
        }

        public bool AddUsers(IEnumerable<User> users)
        {
            try
            {
                var countUsers = db.Users.Count();
                db.Users.AddRange(users.Select(user => { user.Id = ++countUsers; return user; }).ToList());
                db.SaveChanges();

                return true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                throw;
            }
        }

        public IEnumerable<User> GetUsers()
            => db.Users.ToList();
    }
}