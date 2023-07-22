import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService,private router:Router){}
  applicant: User = {
    userId: 0,
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    street: '',
    city: '',
    country: '',
    state: '',
    zip: '',
    profilePhoto: ''
  };
  onSubmit() {
    this.userService.createUser(this.applicant);
    this.router.navigate(['/login']);
  }
}
