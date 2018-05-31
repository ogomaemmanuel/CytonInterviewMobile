import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { UserLogin } from '../../Models/UserLogin';
import { Storage } from '@ionic/storage';

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
    private storage:Storage,
    private alertCtr:AlertController,
    public navCtrl: NavController,
    private menuCtrl: MenuController,
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
    this.menuCtrl.swipeEnable(false);
  }
  goToRegistrationPage() {
    this.navCtrl.push("RegistrationPage")
  }

  authenticate() {
     this.user= this.userLoginFormGroup.value;
     this.auth.login(this.user).subscribe(resp=>{
      console.log(JSON.stringify(resp));
      this.storage.set("loggedInUserDetails",JSON.stringify( resp)).then(()=>{
        this.navCtrl.setRoot("HomePage",{loggedInUser:resp["email"]});
      })

       
     },error=>{
       console.log(JSON.stringify( error.error));
      if(error.error["InvalidLogin"][0]){
        let alert= this.alertCtr.create({
          message:error.error["InvalidLogin"][0],
          title:"Login Error",
          buttons:["ok"]
        })
        alert.present();
         
      }

     });
  }
  ionViewWillEnter() {
    this.menuCtrl.swipeEnable(false)
  }
  ionViewDidLeave() {
    this.menuCtrl.swipeEnable(false)
  }
}
