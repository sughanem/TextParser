import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from './ApiResult';
import { TextParserService } from './text-parser.service';
import { Word } from './Word';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textLength: number | undefined;
  wordNum: number | undefined;
  wordList: Word [] | undefined;

  constructor(private textParserService: TextParserService) { }

  ngOnInit(): void {
  }

  parse(text: string){

    this.textParserService.parse(text).subscribe( res => {
      this.textLength = res.textLength;
      this.wordNum = res.wordNum;
      this.wordList = res.wordList;
    })
    
  }

}
