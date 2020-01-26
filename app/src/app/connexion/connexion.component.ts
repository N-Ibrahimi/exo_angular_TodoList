import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  

  constructor() {}

  ngOnInit() {
  }

  signup(user,pass){
    console.log(user + " , " + pass);
  }
}
