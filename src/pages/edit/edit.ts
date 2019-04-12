import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HTTP } from '@ionic-native/http';
//import {HttpClient} from '@angular/common/http';
//import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  barbershop = {
    BarberID:"",
    BarberName:"",
    OwnerName:"",
    TelBarber:"",
    Address:""

  };
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }



    

}
