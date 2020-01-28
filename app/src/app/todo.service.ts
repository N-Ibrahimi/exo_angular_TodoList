import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { TodoList } from './todo/todo.component';

//http://92.222.69.104/todo/create/mnb/mnb

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private Url="http://92.222.69.104:80/todo/listes";
  public username: string;
  public Password:string;

  constructor(private http:HttpClient) {
   }
 
  getList():Observable<Data>{
    const Headers=new HttpHeaders().set('login',this.username).set('password',this.Password).set('Content-Type','application/json');
    return this.http.get<Data>(this.Url, {headers:Headers});
    }

    sendList(data:Data):Observable<any>{
    const Header=new HttpHeaders().set('login', this.username).set('password',this.Password).set('Content-Type','application/json');
    return this.http.post<any>(this.Url,data, {headers:Header});
    }

    connectMe(u,p):Observable<String>{
      this.username=u;
      this.Password=p;
      const hearders=new HttpHeaders().set('login',u).set('password',p).set('Content-Type','application/json');
      return this.http.get<string>(this.Url,{headers:hearders});
    }
  }
export class Data{
  utilisateur:string;
  password:string;
  todoListes:[];
  constructor(user,pass,list) {
    this.utilisateur=user;
    this.todoListes=list;
    this.password=pass;
  }
}