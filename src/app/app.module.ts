import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { URLTOKEN } from './app.urltoken';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { RideProvider } from '../providers/ride/ride';
import { RideBookingProvider } from '../providers/ride-booking/ride-booking';
import { AppHttpInterceptorProvider } from '../providers/app-http-interceptor/app-http-interceptor';

@NgModule({
  declarations: [
    MyApp,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorProvider,
      multi: true
    },
    {provide:URLTOKEN,useValue:"http://localhost:49239/"},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    RideProvider,
    RideBookingProvider,
  ]
})
export class AppModule {}
