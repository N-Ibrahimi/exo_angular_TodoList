import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

export class Item{
  constructor(element:String){}
}

@Component({
  selector: 'app-item',
  template:`<ul *ngFor="let item of items" class="d-flex  bg-warning rounded mx-0 my-3 p-0 border border-secondary">
               <li *ngIf="view" class="flex-grow-1 m-0 p-0 pl-3 my-3 d-inline-flex">
                  {{item}}
                </li>
                <span class="fas fa-trash-alt text-danger my-4 m-2" (click)="delete($event)"></span>
                <span class="fas fa-pencil-alt m-1 mr-2  my-4 p-0" (click)="modify($event)" ></span>
            </ul>
            <div class="rounded-pill m-3 p-3 d-flex justify-content-center font-weight-bold" 
            style="background-color:rgb(173, 223, 252); border:1px solid rgba(110, 101, 231, 0.808)" (click)="add($event)">
              Add New Task
            </div> `,
  styleUrls: []
})

export class ItemComponent implements OnInit {

  public items=[];
  public view=true;
  constructor(private item:TodoService) { }
  @Input() public datatoChild;
  
  ngOnInit() {
    this.items= this.datatoChild;
  }

  delete(event){
    console.log(event);
  }  
  modify(event){
    console.log(event.target);
    this.view=false; 
  }

  add(event){
    console.log(event);
  }
}
