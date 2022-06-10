import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Word } from './Word';

@Injectable({
  providedIn: 'root'
})
export class TextParserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { 

  }

  parse(text: string){
    return this.http.get<Word []>(`${this.apiUrl}/parse/${text}`);
  }
}
