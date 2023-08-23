import { Component, Input } from '@angular/core';
import { UsersService } from 'src/user.service';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from 'src/roles.enum';
import { JobService } from 'src/job.service';


@Component({
  
  templateUrl:'./job-dashboard.component.html',
  styleUrls: ['./job-dashboard.component.css'],
})
export class JobDashboardComponent {

  count = 0;
  roles :any;
shownotif : boolean = false;
countnotif =0;

  constructor(
    private jobService : JobService,
    private us : UsersService,
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
    });

    
    
  }

  public todo: any;


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}



