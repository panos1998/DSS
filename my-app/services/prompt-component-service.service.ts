import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from '../src/app/Interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class PromptComponentServiceService {

  constructor(private http: HttpClient) { }
  getMessage(){
// http.get('http://localhost:8000/items').subscribe(
//   (response) => {
//     console.log(response)
//   },
//   (error) => {
//     console.log(error)
//   }
// )
    // return this.http.get<response>("/api/malakia");
  }
}