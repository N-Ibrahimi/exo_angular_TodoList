import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Data} from './Data.module';
import { findNode } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private Url="/assets/db/data.json";
  public finded;
  constructor(private http:HttpClient) { }

  getList(){
    //return //this.http.get(this.Url);
    return [{"name": "Devoir IPI", "elements": ["Apprendre Ajax", "Etudier Javascript"]},{
          "name": "Perso","elements": ["Se lever", "Se doucher"]},{
          "name": "one","elements": ["going cinma", "go sleep man ! "]},{
          "name": "two","elements": ["aller au parc", "aller !!! "]},{
          "name": "three","elements": ["fait du sport", "plus de code, arretez ! "]}];
          //  when you are using the data in Ts files with the service. but if you have a BD or server, it is bettre to use observable 
        
      }


}
