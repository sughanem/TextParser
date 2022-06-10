import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { TextParserService } from './text-parser.service';
import { Word } from './Word';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  words$: Observable<Word[]> | any;

  constructor(private textParserService: TextParserService) { }

  ngOnInit(): void {
  }

  parse(text: string){

    this.words$ = this.textParserService.parse(text);
    
  }

}
