import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/*当前模块含有的page*/
import { HomePage } from './home';
/*为什么在这个功能模块直接引用另一个组件，会报错*/
import { NotabsPage } from './notabs/notabs';

/*子模块*/
import { NotabsModule } from './notabs/notabs.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    NotabsModule
  ],
  exports: [
    HomePage
  ],
  entryComponents: [
    HomePage,
  ]
})
export class HomeModule {}
