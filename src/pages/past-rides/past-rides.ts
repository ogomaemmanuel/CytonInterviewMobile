import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RideBookingProvider } from '../../providers/ride-booking/ride-booking';
import { BookedRide } from '../../Models/BookedRide';

/**
 * Generated class for the PastRidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-past-rides',
  templateUrl: 'past-rides.html',
})
export class PastRidesPage implements OnInit {
  pastRides: BookedRide[] = [];

  constructor(
    public navCtrl: NavController,
    private bookedRideCtr: RideBookingProvider,
    public navParams: NavParams) {
  }
  ngOnInit(): void {

  }
  ionViewWillEnter() {
    this.bookedRideCtr.getPastRides().subscribe(rides => {
      this.pastRides = rides;
    }, error => {

    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PastRidesPage');
  }



}
