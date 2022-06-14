import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResult } from './ApiResult';

@Injectable({
  providedIn: 'root'
})
export class TextParserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { 

  }

  parse(text: string){
    return this.http.get<ApiResult>(`${this.apiUrl}/parse/${text}`);
  }
}
