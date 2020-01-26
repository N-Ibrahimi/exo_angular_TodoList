import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {Item} from '../item/item.component';

export class TodoList{
  constructor(public name:string, elements:Item[]){}
}

@Component({
  selector: 'app-todo',
  template: `
          <div *ngFor="let i of list; let num=index" class="shadow col-md-3 col-sm-12 m-4 border border-secondary rounded " [style.background-color]="'rgba(204, 204, 204, 0.808)'">
              <p class="font-weight-bolder  my-3" [style.color]="'rgb(224, 66, 3)'" > {{num+1 }}) {{ i.name | titlecase}} </p> 
              <app-lists [datalist]="i.elements"  ></app-lists>  
          </div>
          <div class="shadow col-md-3 col-sm-12 m-4 border border-secondary rounded  d-flex justify-content-center" [style.background-color]="'rgba(204, 204, 204, 0.808)'" (click)="addList()" >
            <i class="fas fa-plus-circle m-auto " [ngStyle]="{'font-size':'60px', 'color':'rgb(173, 223, 252)','text-shadow':'1px 1px 2px grey, -1px -1px 2px grey'}"></i>
          </div> `,
  styleUrls: []
})
export class TodoComponent implements OnInit {
  public list;
  public entery;

  constructor(private listservice:TodoService) {
    this.list=this.listservice.getList();
  }
  
  addList(){
    this.list.push(new TodoList( "Enter Title", []));
  }


  ngOnInit() {
   
    //console.log(this.list);    
    //this.listservice.getList()
   //.subscribe(data=> (this.entery=data));
    //console.log(this.listservice.getList().subscribe());  
}
}
