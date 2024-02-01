import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentStage } from 'src/environments/environment.development';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requiresAuthentication = req.headers.has('Authorization');
    // If authentication is required, add the token from local storage

    const baseUrl = environmentStage.apiUrl;
    // Append the base URL to the request URL
    const url = `${baseUrl}${req.url}`;
   
        // If authentication is required, add the token
        const apiRequest = requiresAuthentication
        ? req.clone({
            setHeaders: {
              Authorization: `${localStorage.getItem('authToken')}`,
            },
            url: url,
          })
        : req.clone({ url: url });
 

    // Pass the cloned request instead of the original request to the next handler
    return next.handle(apiRequest);
  }
}
