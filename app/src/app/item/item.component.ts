import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

export class Item{
  constructor(element:String){}
}

@Component({
  selector: 'app-item',
  template:`
                <li class="col-auto mr-auto px-0 m-1 py-2 text-wrap list-unstyled">
                  {{task}}
                </li>
                <span class="col-auto fas fa-trash-alt text-danger m-2 my-3 p-0 " (click)="delete($event)"></span>
                <span class=" col-auto fas fa-pencil-alt p-0 my-3 m-0 mr-2" (click)="modify($event)" ></span>
                `,
  styleUrls: []
})

export class ItemComponent implements OnInit {
  public view=true;
  constructor(private item:TodoService) { }
  @Input() public task;
  
  ngOnInit() {

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
