using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fanofcucumbers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace cucumbers.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CucumbersController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<CucumbersController> _logger;

        public CucumbersController(ILogger<CucumbersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Cucumbers> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Cucumbers
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
