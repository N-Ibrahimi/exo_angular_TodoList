import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { ItemComponent } from './item/item.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RouteComponent } from './route/route.component';
import {TodoService} from './todo.service';
import { ListsComponent } from './lists/lists.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ItemComponent,
    ConnexionComponent,
    RouteComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
