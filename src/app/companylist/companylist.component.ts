import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompanyService } from 'src/company.service';
import { JobService } from 'src/job.service';
import { UsersService } from 'src/user.service';
import { CompanyDescriptionComponent } from '../company-description/company-description.component';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css'],
 
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
    public dialog: MatDialog,
    
    
    @Inject('JWT_TOKEN') private token: string) {}


  ngOnInit(): void {
    this.cs.findAllCompanies().subscribe((companies: Array<any>) => {
      this.companies = [...companies];
      this.count = this.companies.length;

      
    }); 
  }
  
  openCompanyDescription(company:any){
    const dialogRef = this.dialog.open(CompanyDescriptionComponent,{
      data: company // Pass the company data to the dialog
    });

dialogRef.afterClosed().subscribe(result => {
  console.log(`Dialog result: ${result}`);
});
}





  }

 
  

