// upload.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(private http: HttpClient,
    private jwtHelper : JwtHelperService) {}


  uploadCV(jobId: number, file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`http://localhost:3000/application/${jobId}`, formData);
  }
}
