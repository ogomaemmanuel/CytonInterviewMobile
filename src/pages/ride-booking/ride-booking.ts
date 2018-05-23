import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ride } from '../../Models/Ride';

/**
 * Generated class for the RideBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ride-booking',
  templateUrl: 'ride-booking.html',
})
export class RideBookingPage implements OnInit {

 space:number=0;
 ride:any
  ngOnInit(): void {
  this.ride= this.navParams.get("ride");
  
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RideBookingPage');
  }
  bookRide(){

  }
}
