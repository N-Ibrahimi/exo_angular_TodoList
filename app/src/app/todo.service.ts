import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getList(){
    return [{
          "name": "Devoir IPI",
          "elements": ["Apprendre Ajax", "Etudier Javascript"]
        }, {
          "name": "Perso",
          "elements": ["Se lever", "Se doucher"]
        },
        {
          "name": "Perso",
          "elements": ["Se lever", "Se doucher"]
        },
        {
          "name": "Perso",
          "elements": ["Se lever", "Se doucher"]
        },
        {
          "name": "Perso",
          "elements": ["Se lever", "Se doucher"]
        }
      ];
  }



}
