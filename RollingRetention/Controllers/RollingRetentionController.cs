using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RollingRetention.Models;
using RollingRetention.Services;

namespace RollingRetention.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RollingRetentionController : ControllerBase
    {
        private readonly IRollingRetentionService rollingRetentionService;
        public RollingRetentionController(IRollingRetentionService rollingRetentionService)
        {
            this.rollingRetentionService = rollingRetentionService;
        }

        [HttpGet("CalculateDataRollingRetentionXDayFromDB")]
        public IEnumerable<DataRollingRetentionXDay> CalculateDataRollingRetentionXDayFromDB()
            => rollingRetentionService.GetDataRollingRetentionXDayFromDB();

        [HttpGet("CalculateDataRollingRetention7DayFromDB")]
        public IEnumerable<DataRollingRetention7Day> CalculateDataRollingRetention7DayFromDB()
            => rollingRetentionService.GetDataRollingRetention7DayFromDB();

        [HttpPost("CalculateDataRollingRetention7DayFromClient")]
        public IEnumerable<DataRollingRetention7Day> CalculateDataRollingRetention7DayFromClient(IEnumerable<User> users)
            => rollingRetentionService.GetDataRollingRetention7DayFromClient(users);


        [HttpPost("CalculateDataRollingRetentionXDayFromClient")]
        public IEnumerable<DataRollingRetentionXDay> CalculateDataRollingRetentionXDayFromClient(IEnumerable<User> users)
            => rollingRetentionService.GetDataRollingRetentionXDayFromClient(users);
    }
}