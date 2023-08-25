import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from 'src/application.service';
import { UsersService } from 'src/user.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  applyform: FormGroup = new FormGroup({
    cv : new FormGroup({}),
  });
  submitted = false;
  returnUrl: string | undefined;
  error: string | undefined;



  constructor(@Inject(MAT_DIALOG_DATA) public job: any,private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private us:UsersService, private as:ApplicationService) { }

  ngOnInit() {
    this.applyform = this.formBuilder.group({
      cv: new FormControl("", [Validators.required]),
    });

  }

  onSubmit(){
    if (this.applyform.invalid) {
      console.log("invalid");    
  }}

  uploadCV(fileInput: any, jobId: any) {
    const file: File = fileInput.files[0];
    
    if (file) {
      this.as.uploadCV(jobId, file).subscribe(
        response => {
          // Handle successful upload
          console.log('File uploaded successfully:', response);
        },
        error => {
          // Handle error
          console.error('Error uploading file:', error);
        }
      );
    } else {
      console.error('No file selected.');
    }
  }

}
