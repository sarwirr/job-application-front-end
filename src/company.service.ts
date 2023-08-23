import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class CompanyService {
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


createCompany(data: any){
    return this.http.post('http://localhost:3000/company', data );
}

findAllCompanies(){
    return this.http.get<any[]>('http://localhost:3000/company');
}

findCompanyById(id: any) {
    return this.http.get<any>(`http://localhost:3000/company/findcompanyById/${id}`);
}



  }