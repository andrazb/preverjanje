import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HelloService {
  constructor(private httpClient: HttpClient) { }

  getName(name: string) {
    return this.httpClient.get(`/hello/${name}`);
  }
  
}
