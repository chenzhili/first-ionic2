import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/*当前模块含有的page*/
import { NotabsPage } from './notabs';


@NgModule({
  declarations: [
    NotabsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotabsPage),
  ],
  exports: [
    NotabsPage
  ],
  entryComponents: [
    NotabsPage,
  ]
})
export class NotabsModule {}
