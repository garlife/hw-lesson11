import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


public delUser(i) {
  return this.http.delete(`https://jsonplaceholder.typicode.com/users/${i}`).pipe(map(data => {
    console.log(data);
    return data;
  })).subscribe(data => {
    console.log(data)
  })
}

public addUser(item) {
  return this.http.post('https://jsonplaceholder.typicode.com/users', {item}).pipe(map(data => {
    console.log(data);
    return data;
  })).subscribe(data => {
    console.log(data)
  })
}

public putUser(item) {
  return this.http.put(`https://jsonplaceholder.typicode.com/users/${item.id}`, {item}).pipe(map(data => {
    console.log(data);
    return data;
  })).subscribe(data => {
    console.log(data)
  })
}

}
