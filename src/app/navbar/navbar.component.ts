import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
   
    private router : Router,
    
    
    @Inject('JWT_TOKEN') private token: string) {}


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  profile() {
    this.router.navigate(['profile']);
    }

  company(){
    this.router.navigate(['companylist']);
  }

  job(){
    this.router.navigate(['jobdashboard']);
  }
  
}
