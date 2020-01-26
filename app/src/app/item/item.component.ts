import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

export class Item{
  constructor(element:String){}
}

@Component({
  selector: 'app-item',
  template:`    <div [ngSwitch]="qltag" class="w-80 mr-auto px-0 m-1 py-2">
                <li *ngSwitchCase="'view'" class=" text-wrap list-unstyled text-wrap ">
                  {{task | titlecase}} {{index}}
                </li>
                <input *ngSwitchCase="'edit'" value={{task}} (keydown)="onEnter($event)" autofocus>
                </div>
                <span class="col-auto fas fa-trash-alt text-danger m-2 my-3 p-0 " (click)="delete($event)"></span>
                <span class=" col-auto fas fa-pencil-alt p-0 my-3 m-0 mr-2" (click)="modify($event)" ></span>
                `,
  styleUrls: []
})

export class ItemComponent implements OnInit {
  public qltag="view";
  constructor(private item:TodoService) { }

  @Input() public task;
  @Input() public index;
  
  ngOnInit() {

  }
  
  delete(event){
    console.log("delete this one " +event);
  }  
  modify(event){
    console.log(event.target);
    this.qltag="edit"; 
  }

  onEnter(event){
    if (event.key === "Enter") {
      this.task=event.target.value.trim();
      this.qltag="view";
    } 
  }
}
