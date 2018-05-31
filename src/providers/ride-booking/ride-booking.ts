import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { URLTOKEN } from '../../app/app.urltoken';
import { BookedRide } from '../../Models/BookedRide';

/*
  Generated class for the RideBookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RideBookingProvider {
  endPoint:string="api/RideBooking";
  constructor(
    @Inject(URLTOKEN)apiUrl:string,
    public http: HttpClient) {
   this.endPoint=apiUrl+this.endPoint;
  }

  bookRide(bookedRide:BookedRide){
    return  this.http.post(this.endPoint,bookedRide).map(resp=>resp);
  }

  cancelBooking(){

  }
  getCustomerBookedRides(){
    return this.http.get<BookedRide[]>(this.endPoint+"/bookedRide").map(resp=>resp);
  }

  getPastRides(){
     return this.http.get<BookedRide[]>(this.endPoint+"/pastRides").map(resp=>resp)
  }
}
