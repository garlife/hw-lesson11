import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {
users: any = [];

  constructor(private usersService: UsersService){
  
  };
  
  // getUsers() {
  //   this.usersService.getUsers()
  //     .subscribe(data => {
  //       for (const d of (data as any)) {
  //         this.users.push({
  //           name: d.name,
  //           price: d.price
  //         });
  //       }
  //       console.log(this.users);
  //     });
  // }


ngOnInit(){
  // this.usersService.getUsers().subscribe(data => {});
  this.usersService.getUsers()
  .subscribe((value) => {
    // for (const d of (data as any)) {
      this.users = value;
  });
}
}
