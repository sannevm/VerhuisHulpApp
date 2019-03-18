import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoItem } from '../models/todo-item';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TodoListItemService {
  
  todoItem: TodoItem;
  apiUrl = 'http://localhost:25449/api/TodoItem';
  
  constructor(private http: HttpClient) { }

  public getAll() {
    
    return this.http.get<any>(this.apiUrl);
  }

  updateTodoItem (todoItem: TodoItem, id: number): Observable<TodoItem> {
    console.log("updateTodoItem wordt aangeroepen");
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    const url = `${this.apiUrl}/${id}`;

    console.log("url = ", url);
    return this.http.put<TodoItem>(url, todoItem, httpOptions);
  }

  addTodoItem (todoItem: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, todoItem, httpOptions);
  }

  deleteTodoItem(id: number): Observable<{}>{
    console.log("deleteTodoItem in de service wordt aangeroepen");
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete(url);
    
  }
  
}
