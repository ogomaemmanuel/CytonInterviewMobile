import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { URLTOKEN } from '../../app/app.urltoken';
import { Ride } from '../../Models/Ride';

/*
  Generated class for the RideProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RideProvider {
  endPoint = "api/Ride"
  constructor(
    @Inject(URLTOKEN) apiUrl: string,
    public http: HttpClient) {
    this.endPoint = apiUrl + this.endPoint;

  }

  getRides() {
    return this.http.get(this.endPoint+"/all" ).map(resp=>resp)
  }
  createRide(ride: Ride) {
   return this.http.post(this.endPoint,ride).map(resp=>resp)

  }

  deleteRide() {

  }

  getRide() {

  }

  updateRide() {

  }
}
