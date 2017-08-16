import {Component, OnInit} from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { AnalysisPage } from '../analysis/analysis';
import { NotabsPage } from './notabs/notabs';

/*通过根模块导航到没有tabs的页面*/


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  pet:any;
  constructor(private navCtrl: NavController,private app: App) {

  }
  changeState(){
    console.log(this.pet);

  }
  ngOnInit(){
    this.pet = "puppies";
    console.log(this.pet);
  }
  toAccount(){
    this.navCtrl.push(AnalysisPage);
  }
  toNoTabs(){
    this.app.getRootNav().push(NotabsPage,{name:this.pet});
  }
}
