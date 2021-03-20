import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from './user.interface';

@Injectable()
export class AddrConcatInterceptor implements HttpInterceptor {
  constructor() {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return next.handle(req);
//   }


    intercept(
      req: HttpRequest<Users>,
      next: HttpHandler
    ): Observable<HttpEvent<Users>> {
      return next.handle(req).pipe(
        map((event: HttpEvent<Users>) => {
          if (event instanceof HttpResponse) {
            const modEvent = event.clone({
              body: event.body.map((user) => {
                const nameNick = `${user.name} (${user.username})`;
                const addressname = `(${user.address.zipcode}), ${user.address.city}, ${user.address.street}, ${user.address.suite}`;
                return {nameNick, addressname, ...user};
              }),
            });
            return modEvent;
          }
        })
      );
    }
   
}
