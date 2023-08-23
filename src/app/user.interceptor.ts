import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // check if the URL of the request is in the list of excluded routes
    const excludedRoutes = ['/', '/login', '/registration'];
    if (excludedRoutes.includes(req.url)) {
      return next.handle(req);
    }
    // interceptor logic
    const token = localStorage.getItem('token');
    const authReq = req.clone({
      setHeaders: { Authorization:`Bearer ${token}`}
    });
    return next.handle(authReq);

  }
}
