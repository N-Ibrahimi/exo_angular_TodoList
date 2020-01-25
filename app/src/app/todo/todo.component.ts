import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public list=[];



  constructor( private listservice:TodoService) { 
    
  }
  
  ngOnInit() {
    this.list=this.listservice.getList();
    //console.log(this.list);
  }

}
