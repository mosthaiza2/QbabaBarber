import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  queuebarber:any=0;
  data:any=0;
  constructor(public navCtrl: NavController,public navParam: NavParams, public http: Http) {
    this.getData();
}
  getData(){
    this.http.get('http://localhost:8080/queuebarber')
    .map(res => res.json()).subscribe(data => {this.queuebarber= data});
}

  ionViewWillEnter(){
   this.getData();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
