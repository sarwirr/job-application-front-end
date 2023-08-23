import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/company.service';
import { JobService } from 'src/job.service';
import { UsersService } from 'src/user.service';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent {
  showNavbar=true;
  companies: any[] = [];
  count = 0;

  constructor(
    private jobService : JobService,
    private us : UsersService,
    private cs :CompanyService,
    private router : Router,
    
    
    @Inject('JWT_TOKEN') private token: string) {}


  ngOnInit(): void {
    this.cs.findAllCompanies().subscribe((companies: Array<any>) => {
      this.companies = [...companies];
      this.count = this.companies.length;

      
    });

    
    
  }
}
