using System.IO;
using LumenWorks.Framework.IO.Csv;
using System.Data;
using System.Collections.Generic;
using System;
using System.Collections;
using System.Linq;


namespace fanofcucumbers
{

    public class Cucumbers  
    {  
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }

    }
    
}
