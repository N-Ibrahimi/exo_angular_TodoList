import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Item } from '../item/item.component';
import { observable } from 'rxjs';

export class TodoList {
  constructor(public name: string, elements: Item[]) { }
}

@Component({
  selector: 'app-todo',
  template: `
          <div *ngFor="let i of list; let num=index" class="shadow col-md-3 col-sm-12 m-4 border border-secondary rounded d-flex" [style.background-color]="'rgba(204, 204, 204, 0.808)'">
          <button mat-mini-fab color="warn" style="position:absolute; right:-8px;" (click)="delete(num)"><i class="fas fa-times p-0"></i></button> 
          <app-lists [datalist]="i" [index]="num" [name]="i.name"  style="z-index=-100; min-height:400px" class="col-12" ></app-lists>  
          </div>
          <div class="shadow col-md-3 col-sm-12 m-4 border border-secondary rounded  d-flex justify-content-center" [style.background-color]="'rgba(204, 204, 204, 0.808)'" (click)="addList()" >
            <i class="fas fa-plus-circle m-auto " [ngStyle]="{'font-size':'60px', 'color':'rgb(173, 223, 252)','text-shadow':'1px 1px 2px grey, -1px -1px 2px grey'}"></i>
          </div> `,
  styleUrls: []
})
export class TodoComponent implements OnInit {
  public qltag = "view";
  public list;
  public num=0;

  constructor(private listservice: TodoService) {
  }

  addList() {
    this.list.push({ 'name': "Enter Title", "elements": [] });
  }

  delete(num){
    if(confirm("Are you sure to delete this list?")){
    this.list.splice(num, 1);
    }
  }
  ngOnInit() {
    this.listservice.getList().subscribe(res=> this.list=res.todoListes, error => console.log(error));
  }

    

}
