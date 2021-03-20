import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { MatTableDataSource } from '@angular/material/table';
import { User,Users } from './user.interface';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  formUser: FormGroup;
  displayedColumns: string[] = ['nameNick', 'email', 'addressname', 'action']


  dataSource;


  constructor(public usersService: UsersService, public fb: FormBuilder) {
  }
 

  ngOnInit() {
    
    // this.usersService.getUsers().subscribe((users: Users) => {
    //   this.dataSource = users;
    // });

    this.usersService.getUsers().subscribe((users: Users) => {
      this.formUser = this.fb.group({
        users: this.fb.array([]),
      });
      users.forEach((user, index) =>
        (this.formUser.get('users') as FormArray).insert(
          index,
          this.fb.group({
            name: this.fb.control(user.name),
            username: this.fb.control(user.username),
            nameNick: this.fb.control(user.nameNick),
            email: this.fb.control(user.email),
            addressname: this.fb.control(user.addressname),
          })
        )
      );

      this.dataSource = new MatTableDataSource((this.formUser.get('users') as FormArray).controls);
      this.dataSource.filterPredicate = (row, filter) => {
        console.log(row, filter);
        const user = row.value as User;
        return (
          user.name
            .trim()
            .toLowerCase()
            .includes(filter.trim().toLowerCase()) ||
          user.email
            .trim()
            .toLowerCase()
            .includes(filter.trim().toLowerCase())      
          || user.addressname
            .trim()
            .toLowerCase()
            .includes(filter.trim().toLowerCase())
        );
      };
    });

  }
  filterFunction(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
  add(i){
    (this.formUser.get('users') as FormArray).insert(i+1, this.fb.group({
      name: this.fb.control(''),
      username: this.fb.control(''),
      nameNick: this.fb.control(''),
      email: this.fb.control(''),
      addressname: this.fb.control('')
    }));
    this.dataSource = new MatTableDataSource((this.formUser.get('users') as FormArray).controls);
  }
  del(i){
    (this.formUser.get('users') as FormArray).removeAt(i);
    this.dataSource = new MatTableDataSource((this.formUser.get('users') as FormArray).controls);
    this.usersService.delUser(i);
  }

}


