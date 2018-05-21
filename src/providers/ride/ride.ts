import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RideProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RideProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RideProvider Provider');
  }

  getRides(){

  }
  createRide(){

  }

  deleteRide(){

  }

  getRide(){

  }

  updateRide(){

  }
}
