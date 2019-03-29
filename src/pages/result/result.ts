import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  barbershop:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let bid=this.navParams.get('barberid');
    this.map(res => res.json()).subscribe(data => {this.barbershop = data});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
