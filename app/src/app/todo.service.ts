import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { TodoList } from './todo/todo.component';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private Url="http://92.222.69.104:80/todo/listes";
  public finded;
  constructor(private http:HttpClient) {
   }
 
  getList():Observable<Data>{
    const Headers=new HttpHeaders().set('login','mnb').set('password','mnb').set('Content-Type','application/json');
    return this.http.get<Data>(this.Url, {headers:Headers});

     
    /*   
    ,Headers{'login':'mnb','password':'mnb'}
    return [{"name": "Devoir IPI", "elements": ["Apprendre Ajax", "Etudier Javascript"]},{
          "name": "Perso","elements": ["Se lever", "Se doucher"]},{
          "name": "one","elements": ["going cinma", "go sleep man ! "]},{
          "name": "two","elements": ["aller au parc", "aller !!! "]},{
          "name": "three","elements": ["fait du sport", "plus de code, arretez ! "]}];
          //  when you are using the data in Ts files with the service. but if you have a BD or server, it is bettre to use observable 
        
      }
*/
    }
}

interface Data{
  utilisateur:string;
  password:String;
  todoListes:[];
}