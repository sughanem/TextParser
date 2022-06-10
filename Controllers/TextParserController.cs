using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ParsingTextApp.Controllers;

[ApiController]
[Route("api/")]
public class TextParserController : ControllerBase
{

    public TextParserController()
    {
      
    }


    [HttpGet("parse/{text}")]
    public async Task<IEnumerable<Word>> parse(string text)
    {
        return await Task.FromResult(CalcWordNum(text));
    }


    private static IEnumerable<Word> CalcWordNum(string text){
        var words = text.Split(" ");    
        var uniqueWords = words
                    .GroupBy(w => w)
                    .Select(w => new Word { character = w.Key, repeat = w.Count() })
                    .OrderBy(w=>w.repeat);
        return uniqueWords;
    }
}
