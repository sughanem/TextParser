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
    [ProducesResponseType(201)]
    [ProducesResponseType(400)]
    public async Task<ActionResult<ApiResult>> parse(string text)
    {
        if (!string.IsNullOrEmpty(text))
        {
            var ApiResult = new ApiResult {
                textLength = text.Length,
                wordNum = text.Split(" ").Count(),
                wordList = CalcWordNum(text),
            };
            return await Task.FromResult(Ok(ApiResult)); 
        }
        return BadRequest();
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
