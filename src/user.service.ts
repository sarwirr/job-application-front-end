import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user:any;
  constructor(private http: HttpClient,
    private jwtHelper : JwtHelperService
    ) {}


 

 login(data: any): Observable<any>{
      return this.http.post<any>('http://localhost:3000/auth/login', data )
      .pipe(tap(res => {
        const token = res.user;
        localStorage.setItem('token', token);
      }));
 }


  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  findAllUsers(){
    return this.http.get<any[]>('http://localhost:3000/user/findall');
    }

  

  register( data:any){
    return this.http.post('http://localhost:3000/user/register', data );
 
  }

  showmeroles(){
    const user = JSON.parse(localStorage.getItem('user')|| '{}');  
    return user.roles;
  }

  finduserbyid(id: any) {
    return this.http.get(`http://localhost:3000/user/finduserbyid/${id}`);
  }

  findNameOfUserById(id: any ){
    return this.http.get(`http://localhost:3000/user/findnameofUserbyId/${id}`);
  }

  
  finduserbyEmail(email: any) {
    return this.http.get(`http://localhost:3000/user/finduserbyemail/${email}`);
  }

  deleteuser( email: any){
    return this.http.delete(`http://localhost:3000/user/${email}`);
  }

}