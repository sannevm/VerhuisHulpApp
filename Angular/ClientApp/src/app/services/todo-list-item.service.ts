import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoListItemService {

  constructor(private http: HttpClient) { }

  public getAll() {
    const apiUrl = 'http://localhost:25449/api/TodoItem';
    return this.http.get<any>(apiUrl);
  }
  
}
