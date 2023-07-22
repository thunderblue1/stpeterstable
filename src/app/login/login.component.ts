import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserDTO } from '../models/userDTO.model';
import { Router } from '@angular/router';
import { ManageService } from '../service/manage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService:UserService, public manageService:ManageService,private router:Router){

  }
  loginUser:String='';
  loginPassword: String='';
  gottenUsers: UserDTO[] = [];
  managerLoggedIn=false;

  @Output() setManage: EventEmitter<any> = new EventEmitter();

  onSubmit() {
    this.userService.searchUser(this.loginUser,
      (users:UserDTO[]) => {
        this.gottenUsers = users;
        if(this.gottenUsers.length==1) {
          if(this.gottenUsers[0].relation=="manager") {
            this.manageService.manage = true;
          }
        }
      }
    );
    this.router.navigate(['/shop']);
  }
}
