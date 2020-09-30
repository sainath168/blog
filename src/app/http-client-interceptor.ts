import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "ngx-webstorage";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(private locaStorageService: LocalStorageService) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.locaStorageService.retrieve("authenticationToken");
    console.log("jwt token" + token);

    if (token) {
      const clonedReq = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      });
      return next.handle(clonedReq);
    }

    return next.handle(req);

  }
}
