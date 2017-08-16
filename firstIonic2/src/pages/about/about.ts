import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotabsPage } from '../home/notabs/notabs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  goNoTabs(){
    this.navCtrl.push(NotabsPage);
  }

}
