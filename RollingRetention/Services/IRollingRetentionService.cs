using System.Collections.Generic;
using RollingRetention.Models;

namespace RollingRetention.Services
{
    public interface IRollingRetentionService
    {
        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetentionXDayFromClient(IEnumerable<User> users);
        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetentionXDayFromDB();
        public IEnumerable<DataRollingRetention7Day> GetDataRollingRetention7DayFromClient(IEnumerable<User> users);
        public IEnumerable<DataRollingRetention7Day> GetDataRollingRetention7DayFromDB();

    }
}