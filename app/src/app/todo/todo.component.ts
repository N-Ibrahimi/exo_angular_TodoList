import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {Item} from '../item/item.component';
import {Data} from '../Data.module';

export class TodoList{
  constructor(public name:string, elements:Item[]){}
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public list;
  public entery;

  constructor(private listservice:TodoService) {
    this.list=this.listservice.getList();
  }
  
  ngOnInit() {
   
    //console.log(this.list);    
    //this.listservice.getList()
   //.subscribe(data=> (this.entery=data));
    //console.log(this.listservice.getList().subscribe());  

}
}
