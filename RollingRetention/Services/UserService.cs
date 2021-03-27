using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using RollingRetention.Data;
using RollingRetention.Models;

namespace RollingRetention.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository userRepository;
        private readonly ILogger logger;

        public UserService(IUserRepository userRepository, ILogger<UserService> logger)
        {
            this.userRepository = userRepository;
            this.logger = logger;
        }

        public bool AddUser(User user)
        {
            try
            {
                // todo
                userRepository.AddUser(user);
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
                // todo
                var nUser = users.Select(user => user.Id = 0);
                userRepository.AddUsers(users);
                return true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return false;
            }
        }

        public IEnumerable<User> GetAllUsers()
        {
            return userRepository.GetUsers();
        }
    }
}