import { Word } from "./Word"

export interface ApiResult {
    textLength: number
    wordNum: number
    wordList: Array<Word>
}