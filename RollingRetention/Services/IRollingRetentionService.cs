using System.Collections.Generic;
using RollingRetention.Models;

namespace RollingRetention.Services
{
    public interface IRollingRetentionService
    {
        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetentionXDayFromClient(IEnumerable<User> users);
        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetentionXDayFromDB();
        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetention7DayFromClient(IEnumerable<User> users);
        public IEnumerable<DataRollingRetentionXDay> GetDataRollingRetention7DayFromDB();

    }
}