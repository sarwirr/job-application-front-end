import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UsersService } from 'src/user.service';

@Component({ templateUrl: 'login.component.html', styleUrls: ['login.component.css']})

export class LoginComponent implements OnInit { 
  hide = true; 
    loginForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });  
    submitted = false;  
    returnUrl: string | undefined;  
    error: string | undefined;

    
    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private us:UsersService) {}
    
    ngOnInit() {
        this.loginForm = this.formBuilder.group({ 
            email: new FormControl("",[Validators.required]),
            password: new FormControl("",[Validators.required])
        });
        
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/jobdashboard';  
    }
    
    
    
    onSubmit() {
 
        if (this.loginForm.invalid) {
            console.log("invalid");    
        }

        
        this.us.login({ username: this.loginForm.get("email")?.value , password: this.loginForm.get("password")?.value})
            .pipe(first()).subscribe((data:any) => {
                this.error = '';
                 console.log (data);
                localStorage.setItem('token', data.access_token );
                localStorage.setItem('user', JSON.stringify(data.user));

                this.router.navigate([this.returnUrl]);
            }, error => {
                this.error = error;

            });
    }
}