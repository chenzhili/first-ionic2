import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnalysisPage } from './analysis';

@NgModule({
  declarations: [
    AnalysisPage,
  ],
  imports: [
    IonicPageModule.forChild(AnalysisPage),
  ],
  exports: [
    AnalysisPage
  ],
  entryComponents: [
     AnalysisPage,  
  ]
})
export class AnalysisModule {}
