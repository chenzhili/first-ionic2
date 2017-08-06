import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Analysis } from './analysis';

@NgModule({
  declarations: [
    Analysis,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Analysis
  ]
})
export class AnalysisModule {}
