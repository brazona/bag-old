import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpEvent } from '@angular/common/http';

@Injectable()
export class Interceptor implements HttpInterceptor  {
  
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        
        const idToken = localStorage.getItem("id_token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

          return next.handle(cloned)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
        }
        else {
            return next.handle(req)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
        }
    }
    // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    
    return throwError(JSON.stringify(error));
  };
  
}
