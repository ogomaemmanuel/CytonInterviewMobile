import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { RideProvider } from '../../providers/ride/ride';

/**
 * Generated class for the AvailableRidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-available-rides',
  templateUrl: 'available-rides.html',
})
export class AvailableRidesPage implements OnInit {
  
   rides:any=[];
  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private rideCtr:RideProvider,
    public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.getAvailableRides();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailableRidesPage');
  }

  getAvailableRides(){
    this.rideCtr.getRides().subscribe(rides=>{
    this.rides=rides;
    });
  }

  goToBookingPage(ride:any){
    this.navCtrl.push("RideBookingPage",{ride:ride});
  }
  ionViewWillEnter() {
    this.getAvailableRides();
     }

     presentPopover(myEvent) {
      let popover = this.popoverCtrl.create("PopoverPage",);
      popover.present({
        ev: myEvent
      });
    }
  

}
