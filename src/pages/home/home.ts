import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { NewbarberPage} from '../newbarber/newbarber';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  barbershop:any=0;
  constructor(public navCtrl: NavController,public navParam: NavParams, public http: Http) {
    this.http.get('http://localhost:8080/barbershop')
    .map(res => res.json()).subscribe(data => {this.barbershop= data});
  }
  showDetail(id)
  {
    this.navCtrl.push(DetailPage,{barberid:id});
  }
  newbarber()
  {
    this.navCtrl.push(NewbarberPage);
  }  


}
