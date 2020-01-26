import { Component, OnInit,Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-lists',
  template:`<div *ngFor="let item of items" class="bg-warning rounded mx-0 my-2 p-1 border border-secondary ">
               <app-item class="p-0 m-0 d-flex" [task]="item"></app-item>
            </div>
            <button class="col my-3 mx-auto p-2 " 
            style="background-color:rgb(173, 223, 252); border:1px solid rgba(110, 101, 231, 0.808);"  mat-stroked-button color="primary">
              Add New Task
            </button> `,
  styleUrls: []
 
})
export class ListsComponent implements OnInit {
  public view=true;
  items=[];
  constructor(private item:TodoService) { }

  @Input() 
  public datalist;
  
  ngOnInit() {
    this.items=this.datalist;
    console.log(this.datalist);
  }


}
