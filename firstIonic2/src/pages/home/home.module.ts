import { NgModule } from '@angular/core';
import { IonicPageModule,IonicModule } from 'ionic-angular';

/*当前模块含有的page*/
import { HomePage } from './home';
/*为什么在这个功能模块直接引用另一个组件，会报错*/
/*根本原因是当前动态添加的组件视图，并没有被ionic编译，所以找不到，想引用就必须在entryComponent中加入就可以了*/
import { NotabsPage } from './notabs/notabs';

/*子模块*/
import { NotabsModule } from './notabs/notabs.module';

@NgModule({
  declarations: [
    HomePage,NotabsPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    /*NotabsModule*/ //我觉得没要每个组件都作为一个单独的模块来加载
  ],
  entryComponents: [
    HomePage,NotabsPage
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule {}
