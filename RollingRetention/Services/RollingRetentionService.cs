using RollingRetention.Models;
using RollingRetention.Data;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace RollingRetention.Services
{
    public class RollingRetentionService : IRollingRetentionService
    {
        private readonly IUserRepository userRepository;
        private readonly ILogger logger;

        public RollingRetentionService(IUserRepository userRepository, ILogger<RollingRetentionService> logger)
        {
            this.logger = logger;
            this.userRepository = userRepository;
        }

        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetention7DayFromClient(IEnumerable<User> users)
        {
            var dataRR7Ds = new List<DataRollingRetentionXDay>();

            foreach (var user in users)
                dataRR7Ds.Add(new DataRollingRetentionXDay()
                {
                    Id = user.Id,
                    UserLifespan = (user.DateLastActivity - user.DateRegistration).Days
                });

            return dataRR7Ds;
        }

        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetention7DayFromDB()
        {
            var dataRR7Ds = new List<DataRollingRetentionXDay>();

            foreach (var user in userRepository.GetUsers())
                dataRR7Ds.Add(new DataRollingRetentionXDay()
                {
                    Id = user.Id,
                    UserLifespan = (user.DateLastActivity - user.DateRegistration).Days
                });

            return dataRR7Ds;
        }

        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetentionXDayFromClient(IEnumerable<User> users)
        {
            var dataRRXDs = new List<DataRollingRetentionXDay>();

            return dataRRXDs;
        }

        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetentionXDayFromDB()
        {
            var dataRRXDs = new List<DataRollingRetentionXDay>();

            foreach (var user in userRepository.GetUsers())
                dataRRXDs.Add(new DataRollingRetentionXDay()
                {
                    Id = user.Id,
                    UserLifespan = (user.DateLastActivity - user.DateRegistration).Days
                });

            return dataRRXDs;
        }
    }
}