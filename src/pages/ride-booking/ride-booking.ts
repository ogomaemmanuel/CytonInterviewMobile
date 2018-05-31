import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Ride } from '../../Models/Ride';
import { BookedRide } from '../../Models/BookedRide';
import { RideBookingProvider } from '../../providers/ride-booking/ride-booking';

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

  space: number = 0;
  ride: any
  ngOnInit(): void {
    this.ride = this.navParams.get("ride");

  }
  constructor(
    public navCtrl: NavController,
    private boookedRideCtr: RideBookingProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RideBookingPage');
  }
  bookRide() {
    let bookedRide = new BookedRide();
    bookedRide.rideId = this.ride.rideId;
    bookedRide.space = this.space;
    this.boookedRideCtr.bookRide(bookedRide).subscribe(resp => {
      this.alertCtrl.create({
        message: "Ride successfully booked"
      }).present();
    }, error => {
      this.alertCtrl.create({
        title: "Ride Booking Error",
        message: "Ride booking failed Try again later"
      }).present();
    })
  }

 
}
