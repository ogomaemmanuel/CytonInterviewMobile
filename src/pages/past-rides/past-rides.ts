import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

 
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams) {
  }
  ngOnInit(): void {
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PastRidesPage');
  }

  

}
