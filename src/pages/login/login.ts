import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { UserLogin } from '../../Models/UserLogin';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  public userLoginFormGroup: FormGroup;
  public user:UserLogin;
  constructor(
    public navCtrl: NavController,
    private auth: AuthProvider,
    private formBuilder: FormBuilder,
    public navParams: NavParams) {
  }


  ngOnInit(): void {

    this.userLoginFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],

    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToRegistrationPage() {
    this.navCtrl.push("RegistrationPage")
  }

  authenticate() {
     this.user= this.userLoginFormGroup.value;
     this.auth.login(this.user);
  }
}
