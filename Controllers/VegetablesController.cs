using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using fanofcucumbers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LumenWorks.Framework.IO.Csv;
using System.Data;


namespace cucumbers.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class VegetablesController : ControllerBase
    {
        /*private static readonly string[] Summar = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
        */

        private readonly ILogger<VegetablesController> _logger;

        public VegetablesController(ILogger<VegetablesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Vegetables> Get()
        {
            List<Vegetables> cucumberlist = new List<Vegetables>();

            using (var csvReader = new CsvReader(new StreamReader(System.IO.File.OpenRead(@"Ressources/pathogenes_concombres.csv")), true))
            {
                var csvTable = new DataTable();
                csvTable.Load(csvReader);
                for (int i = 0; i < 20; i++)
                {
                     cucumberlist.Add(new Vegetables {
                            SamplePlan= csvTable.Rows[i][0].ToString(),
                            DateSampled= csvTable.Rows[i][2].ToString(),
                            SystemID= csvTable.Rows[i][3].ToString()
                        });
                }
            }
            /*foreach (var cucum in cucumberlist)  
            {  
                Console.WriteLine( "{0},{1},{2}",
                    cucum.SamplePlan,
                    cucum.DateSampled,
                    cucum.SystemID
                );
            }
            Console.WriteLine(cucumberlist);*/
            return cucumberlist.ToArray();
        
            /*var rng = new Random();
            return Enumerable.Range(1, 20).Select(index => new Vegetables
            {
                SamplePlan = Summar[rng.Next(Summar.Length)],
                DateSampled = Summar[rng.Next(Summar.Length)],
                SystemID = Summar[rng.Next(Summar.Length)]
            })
            .ToArray();*/
        
        }
    }
}
