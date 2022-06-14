
namespace ParsingTextApp{
    public class ApiResult{

        public int textLength { get; set; }

        public int wordNum {get; set;}

        public IEnumerable<Word>? wordList {get; set;}
    }
}