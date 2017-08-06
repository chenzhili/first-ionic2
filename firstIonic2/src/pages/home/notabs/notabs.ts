/**
 * Created by ASUS on 2017/8/6.
 */
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular'

@Component({
  selector: 'no-tabs',
  templateUrl:"./notabs.html"
})
export class NotabsPage{
  public params:any;
  constructor(public navParams :NavParams){
    this.params = this.navParams.get("name");
  }
}
