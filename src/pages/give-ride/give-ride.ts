import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RideProvider } from '../../providers/ride/ride';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';

/**
 * Generated class for the GiveRidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-give-ride',
  templateUrl: 'give-ride.html',
})
export class GiveRidePage implements OnInit {

  rideFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private rideProvider:RideProvider,
    public navParams: NavParams) {
  }

  
  ngOnInit(): void {
    this.rideFormGroup = this.formBuilder.group({
      origin: ['', Validators.compose([Validators.required])],
      destination: ['', Validators.compose([Validators.required])],
      capacity: ['', Validators.compose([Validators.required])],
      startDate: ['', Validators.compose([Validators.required])],

    })
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiveRidePage');
  }


  submitRide(){

  }

}
