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
  constructor(navParams :NavParams){
    this.params = navParams.get("name");
  }
}
