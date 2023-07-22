import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserDTO } from '../models/userDTO.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  manage = false;

  host = "http://localhost:5000";
  public getUser(userId:number,callback:(user: User)=>void):void {
    this.http.get<User>(this.host+"/users/"+userId).subscribe(
      (user:User) => {
        console.log(user);
        callback(user);
      }
    );
  }

  public searchUser(searchTerm:String, callback:(users:UserDTO[])=>void):void {
    this.http.get<UserDTO[]>(this.host+"/users/search/"+searchTerm).subscribe(
      (users:UserDTO[])=> {
        console.log(users);
        callback(users);
      }
    )
  }

  public createUser(user:User):void {
    this.http.post<User>(this.host+"/users",user).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  public editUser(user:User):void {
    this.http.put<User>(this.host+"/users",user).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  public deleteUser(userId: number):void {
    this.http.delete(this.host+"/users/"+userId).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
