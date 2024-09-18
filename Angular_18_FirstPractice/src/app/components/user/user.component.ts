import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonHolderService } from '../../services/json-holder.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule, NavBarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: any[] = [];
  newUser = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    birthDate: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
    companyName: '',
    companyCatchPhrase: '',
    companyBs: ''
  };

  constructor(private jsonholder:JsonHolderService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  // Fetch all users
  fetchUsers(): void {
    this.jsonholder.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser(): void {
    const userToSubmit = {
      firstname: this.newUser.firstname,
      lastname: this.newUser.lastname,
      email: this.newUser.email,
      login: {
        username: this.newUser.username,
        password: 'defaultPassword',
        md5: '',
        sha1: '',
        registered: new Date().toISOString()
      },
      address: {
        street: this.newUser.street,
        suite: this.newUser.suite,
        city: this.newUser.city,
        zipcode: this.newUser.zipcode,
        geo: {
          lat: '',
          lng: ''
        }
      },
      phone: this.newUser.phone,
      website: this.newUser.website,
      company: {
        name: this.newUser.companyName,
        catchPhrase: this.newUser.companyCatchPhrase,
        bs: this.newUser.companyBs
      }
    };

    this.jsonholder.addUser(userToSubmit).subscribe(response => {
      this.users.unshift(response);
      this.newUser = {
        firstname: '', lastname: '', email: '', username: '', birthDate: '',
        street: '', suite: '', city: '', zipcode: '', phone: '', website: '',
        companyName: '', companyCatchPhrase: '', companyBs: ''
      };
    });
  }


}
