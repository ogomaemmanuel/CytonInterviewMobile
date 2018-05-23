import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RideProvider } from '../../providers/ride/ride';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { Ride } from '../../Models/Ride';

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
    private alertCtrl: AlertController,
    private rideProvider:RideProvider,
    public navParams: NavParams) {
  }

  
  ngOnInit(): void {
    this.rideFormGroup = this.formBuilder.group({
      origin: ['', Validators.compose([Validators.required])],
      destination: ['', Validators.compose([Validators.required])],
      capacity: ['', Validators.compose([Validators.required])],
      startTime: ['', Validators.compose([Validators.required])],

    })
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiveRidePage');
  }


  submitRide(){
    let ride = new Ride();
    ride= this.rideFormGroup.value;
    this.rideProvider.createRide(ride).subscribe(resp=>{
      this.rideFormGroup.reset();
        this.alertCtrl.create({
          message:"Trip creation was successfull"
        }).present();

    },error=>{
      
      this.alertCtrl.create({
        message:"Trip Could not be Created"
      }).present();
    })

  }

}
