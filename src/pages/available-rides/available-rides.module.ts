import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailableRidesPage } from './available-rides';

@NgModule({
  declarations: [
    AvailableRidesPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailableRidesPage),
  ],
})
export class AvailableRidesPageModule {}
