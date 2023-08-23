import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  todos: any;
  constructor(private http: HttpClient) {}

createJob(data:any)
{
    return this.http.post('http://localhost:3000/job', data);
}
  

getAllJobs()
{
    return this.http.get<any[]>('http://localhost:3000/job');
}


findJobById(id:any)
{return this.http.get(`http://localhost:3000/jobfindjobbyid/${id}`);
}

getCompanybyJobId(id : any )
{return this.http.get(`http://localhost:3000/getcompanybyjobid/${id}`);
}

deletejob(id:any)
{return this.http.delete(`http://localhost:3000/job/${id}`);}

}