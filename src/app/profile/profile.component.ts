import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/company.service';
import { JobService } from 'src/job.service';
import { UsersService } from 'src/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showNavbar = true;
  user:any;

  constructor(
    private jobService : JobService,
    private us : UsersService,
    private cs :CompanyService,
    private router : Router,
    
    
    @Inject('JWT_TOKEN') private token: string) {}


  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.us.finduserbyid(this.user.id).subscribe((user: any) => {
      this.user = user;
    }
    );

    
    
  }
}
