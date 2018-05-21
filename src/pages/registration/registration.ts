import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { UserRegistration } from '../../Models/UserRegistration';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage implements OnInit {

  userRegisterFormGroup: FormGroup
  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private auth: AuthProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.userRegisterFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword:['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  register() {
    let user: UserRegistration = this.userRegisterFormGroup.value;
    this.auth.register(user).subscribe(resp => {
      let alert = this.alertCtrl.create({
        message: "Account Created Successfully,activation email has been sent to your email address, click on the activation link to activate",
        buttons: [
          {
            text: "ok",
            role: "ok",
            handler: () => {
              this.navCtrl.setRoot("LoginPage");
            }
          },
        ]
      })
      alert.present();

    }, error => {
      if(error.error["InvalidRegistration"][0]){
        this.alertRegistrationError(error.error["InvalidRegistration"][0]);
      }
    
    })
  }

  alertRegistrationError(error:any){
    let alert = this.alertCtrl.create({
      title:"Registration Error",
      message: error,
      buttons: [
        {
          text: "ok",
          role: "ok",
        },
      ]
    })
    alert.present();
  }
}
