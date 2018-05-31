import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookedRide } from '../../Models/BookedRide';
import { RideBookingProvider } from '../../providers/ride-booking/ride-booking';

/**
 * Generated class for the UpcomingRidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming-rides',
  templateUrl: 'upcoming-rides.html',
})
export class UpcomingRidesPage {
  upcomingRides: BookedRide[] = [];
  constructor(
    public navCtrl: NavController,
    private bookedRideCtr: RideBookingProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingRidesPage');
  }

  ionViewWillEnter() {
    this.getBookedRides();
     }
  getBookedRides() {
    this.bookedRideCtr.getCustomerBookedRides().subscribe(resp => {
      this.upcomingRides = resp;
      
    }, error => {

    })
  }

}
