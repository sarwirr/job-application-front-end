import { Component, Input } from '@angular/core';
import { UsersService } from 'src/user.service';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from 'src/roles.enum';
import { JobService } from 'src/job.service';
import { CompanyService } from 'src/company.service';


@Component({
  
  templateUrl:'./job-dashboard.component.html',
  styleUrls: ['./job-dashboard.component.css'],
})
export class JobDashboardComponent {
  showNavbar = true;
  recruiter : any;
  count = 0;
  roles :any;
shownotif : boolean = false;
countnotif =0;

  constructor(
    private jobService : JobService,
    private us : UsersService,
    private cs :CompanyService,
    private router : Router,
    
    
    @Inject('JWT_TOKEN') private token: string) {}

  jobs: any[] = [];
  @Input() title = '';
  @Input() items: any[] = [];
  notifs : any[] = [];
  name: string = '';

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((jobs: Array<any>) => {
      this.jobs = [...jobs];
      this.count = this.jobs.length;
 
      this.fetchRecruiterNames();
      
    });

    
    
  }

  public todo: any;

  private fetchRecruiterNames(): void {
    this.jobs.forEach(job => {
      if (job.recruiter ) {
        this.cs.findCompanyById(job.recruiter).subscribe(company => {
          job.recruiterName = company.name; // Assuming 'name' is the property holding the company name
        });
      }
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}



