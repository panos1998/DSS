import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PromptComponentServiceService {

  constructor(
    
  ) { }
  getMessage(){
    return 'Hello from my service';
  }
}
