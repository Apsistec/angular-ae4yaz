import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { Device } from '@ionic-native/device/ngx';

import { Platform } from '@ionic/angular';
import { AuthenticationService } from './authentication.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    mob: boolean;
    constructor(
        private device: Device,
        public plt: Platform,
        private router: Router,
        private authService: AuthenticationService
    ) {
        this.mob = plt.is('android');
    }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = JSON.parse(localStorage.getItem('token'));
        const browserUUID = localStorage.getItem('device_queue_managment_uuid');

        let device: string = null;
        if (this.mob && this.device && this.device.uuid) {
            device = this.device.uuid;
        } else if (browserUUID) {
            device = browserUUID;
        }

        if (token) {
            request = request.clone({
                setHeaders: { 'x-access-token': token },
            });
        }

        if (device) {
            request = request.clone({
                setHeaders: { 'x-access-device': device },
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: { 'Content-Type': 'application/json' },
            });
        }

        if (request.url.includes(environment.baseURI)) {
            request = request.clone({
                setHeaders: {
                    'x-api-key': environment.xApiKey,
                },
            });
        }

        request = request.clone({
            setHeaders: {
                Accept: 'application/json',
            },
        });

        return next.handle(request).pipe(
            catchError((err, caught: Observable<HttpEvent<any>>) => {
                if (err instanceof HttpErrorResponse && err.status == 401) {
                    if (this.router.url !== '/sso') {
                        this.router.navigateByUrl("/sso")
                        return of(err as any);
                    }
                }
                throw err;
            })
        );
    }
}