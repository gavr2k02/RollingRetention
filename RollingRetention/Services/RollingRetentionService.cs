using System;
using RollingRetention.Models;
using RollingRetention.Data;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace RollingRetention.Services
{
    public class RollingRetentionService : IRollingRetentionService
    {
        private readonly IUserRepository userRepository;
        private readonly ILogger logger;

        private const int maxDay = 32;

        public RollingRetentionService(IUserRepository userRepository, ILogger<RollingRetentionService> logger)
        {
            this.logger = logger;
            this.userRepository = userRepository;
        }

        public IEnumerable<DataRollingRetention7Day> GetDataRollingRetention7DayFromClient(IEnumerable<User> users)
        {
            try
            {
                return CalculateRollingRetention7Day(users);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return new List<DataRollingRetention7Day>();
            }
        }

        public IEnumerable<DataRollingRetention7Day> GetDataRollingRetention7DayFromDB()
        {
            try
            {
                return CalculateRollingRetention7Day(userRepository.GetUsers());
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return new List<DataRollingRetention7Day>();
            }
        }

        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetentionXDayFromClient(IEnumerable<User> users)
        {
            try
            {
                return CalculateDataRollingRetentionXDay(users);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return new List<DataRollingRetentionXDay>();
            }
        }

        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetentionXDayFromDB()
        {
            try
            {
                return CalculateDataRollingRetentionXDay(userRepository.GetUsers());
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return new List<DataRollingRetentionXDay>();
            }
        }

        public IEnumerable<DataRollingRetentionXDay> CalculateDataRollingRetentionXDay(IEnumerable<User> users)
        {
            try
            {
                var dataRRXDs = new List<DataRollingRetentionXDay>();

                for (int i = 0; i < maxDay; i++)
                {
                    double countBack = 0;
                    double countInstall = 0;

                    foreach (var user in users)
                    {
                        if (i <= (user.DateLastActivity - user.DateRegistration).Days)
                            countBack++;

                        if (user.DateRegistration >= user.DateLastActivity.AddDays(-i)) ;
                        countInstall++;
                    }

                    if (countInstall == 0 || countBack == 0)
                        return dataRRXDs;

                    dataRRXDs.Add(new DataRollingRetentionXDay()
                    {
                        Day = i,
                        Percent = Math.Round(countBack / countInstall * 100, 2)
                    });
                }

                return dataRRXDs;

                // var dataRRXDs = new List<DataRollingRetentionXDay>();

                // for (int i = 0; i < maxDay; i++)
                // {
                //     double countBack = users.Where(user => i <= (user.DateLastActivity - user.DateRegistration).Days).Count();
                //     double countInstall = users.Where(user => (user.DateLastActivity.AddDays(-i) <= user.DateRegistration)).Count();

                //     if (countBack == 0 || countInstall == 0)
                //         return dataRRXDs;
                //     else
                //         dataRRXDs.Add(new DataRollingRetentionXDay()
                //         {
                //             Day = i,
                //             Percent = Math.Round(countBack / countInstall * 100, 2)
                //         });
                // }
                // return dataRRXDs;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public IEnumerable<DataRollingRetention7Day> CalculateRollingRetention7Day(IEnumerable<User> users)
        {
            try
            {
                var dataRR7Ds = new List<DataRollingRetention7Day>();

                foreach (var user in users)
                    dataRR7Ds.Add(new DataRollingRetention7Day()
                    {
                        Id = user.Id,
                        UserLifespan = (user.DateLastActivity - user.DateRegistration).Days
                    });

                return dataRR7Ds;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}