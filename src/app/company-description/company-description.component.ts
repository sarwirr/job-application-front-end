import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-company-description',
  templateUrl: './company-description.component.html',
  styleUrls: ['./company-description.component.css']
})
export class CompanyDescriptionComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public company: any) {
    // The 'company' variable will hold the passed data
  }
  
    ngOnInit(): void {
    }

}
