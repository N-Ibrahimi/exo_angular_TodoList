import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  disabled: boolean = true;
  username;
  password;
  confpassword;
  public logedin:boolean=false;

  @Output()
  public status:EventEmitter<any> = new EventEmitter<any>();

  constructor( private connexionservice :TodoService) { }

  ngOnInit() {
  }

  check(userName, password, confpassword) {
    if (userName != null && password == confpassword) {
      this.disabled = false;
    } else {
      this.disabled = true;
    };
  }

  public signup() {
    console.log(this.username +" **"+this.password);
  }

  singin(us,ps){
    console.log(us +" **"+ps);
    this.connexionservice.connectMe(us,ps).subscribe(()=> {this.logedin=true}, error => console.log(error),() => console.log('Fini !'));
    this.status.emit(true);
  }
  onSubmit() {

  }

}
