import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  disabled:boolean=true;
  username;
  password;
  confpassword;


  constructor() {}

  ngOnInit() {
  }

 
  check(userName,password,confpassword){
    if(userName != null && password==confpassword){
      this.disabled=false;
    }else{
      this.disabled=true;
    };
  }
  
  signup(){
    console.log("go don");
  }

}
