// api-interceptor-provider.service.ts

import { Injectable } from '@angular/core';
import { ApiInterceptor } from 'src/common/api.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class ApiInterceptorProviderService {
  provideApiInterceptor() {
    return [
      { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    ];
  }
}
