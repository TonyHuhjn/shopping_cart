import { Component } from '@angular/core';
import { Topitem, TopitemService } from './top-item.service';
import { TopItemComponent } from './top-item.component';
//import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TopitemService, TopItemComponent]
})
export class AppComponent {
  title = 'Welcome to Online store!';
  // newUser ={
  //   username: '',
  //   password: ''
  // }
  // constructor(private user: UserService){}
  // addUser(){
  //   this.user.addNew(this.newUser);
  // }
}
