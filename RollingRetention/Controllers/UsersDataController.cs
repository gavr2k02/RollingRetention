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
    public class UsersDataController : ControllerBase
    {
        private readonly IUserService userService;

        public UsersDataController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public IEnumerable<User> GetUsers()
            => userService.GetAllUsers();


        // [HttpPost]
        // public ActionResult AddUser(User user)
        //     => userService.AddUser(user) ? Ok() : NotFound();

        [HttpPost]
        public ActionResult AddUsers(IEnumerable<User> users)
            => userService.AddUsers(users) ? Ok() : StatusCode(500);

    }
}