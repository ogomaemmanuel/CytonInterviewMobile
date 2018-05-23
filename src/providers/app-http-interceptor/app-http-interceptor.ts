import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import{Storage} from '@ionic/storage';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

/*
  Generated class for the AppHttpInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppHttpInterceptorProvider  implements HttpInterceptor {

  constructor(private storage:Storage) {
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    return Observable.fromPromise(this.storage.get("loggedInUserDetails")).mergeMap((userDetails:any)=>{
      if (req.responseType == 'json') {
       console.clear();
       console.log("Bearer "+JSON.parse(userDetails).accessToken);
       //console.log("User Details "+(userDetails))
       req = req.clone({ responseType: 'text',
       setHeaders: {  
         Authorization: "Bearer "+JSON.parse(userDetails).accessToken
        }  
      });
       return next.handle(req).map(response => {
         if (response instanceof HttpResponse) {
           response = response.clone<any>({ body: JSON.parse(response.body)});
         }
         
         return response;
       });
     }
 
     return next.handle(req);
     })
    
   }
  }
 


