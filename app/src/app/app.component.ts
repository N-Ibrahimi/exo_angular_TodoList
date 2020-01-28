import { Component, Input } from '@angular/core';
import {TodoService} from './todo.service'
import { getMatInputUnsupportedTypeError } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public search;
  public auth:boolean=false;
  constructor(private listservice: TodoService){}

  ngOnInit() {
    
  }

    show(event){
      this.auth=true;
    }

    deconnecte(){
      this.auth=false;
    }
}
