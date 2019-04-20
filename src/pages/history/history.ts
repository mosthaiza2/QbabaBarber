import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController,public navParam: NavParams,public http:Http,private alertCtrl:AlertController) {
    this.getData();
}
  getData(){
    this.http.get('http://localhost:8080/queuebarber')
    .map(res => res.json()).subscribe(data => {this.queuebarber= data});
}
deleteData(QueueID){
  this.alertCtrl.create({
    title:"Confirm", subTitle:"Confirm delete",buttons:[
      { 
        text: "Yes",
        handler:()=>{
          let url ="http://localhost:8080/queuebarber/"+QueueID;
          this.http.delete(url)
            .subscribe(res=>{
              this.data=res;
              console.log(this.data);
                this.showAlert("Success", "Data deleted");
                this.getData();
            }); 
        }
      },
      {
        text: "No",
        handler:()=>{}
      }
    ]
  })
    .present();
 
}
showAlert(msgTitle:string, message:string){
  const alert = this.alertCtrl.create({
    title: msgTitle,
    subTitle: message,
    buttons: ["OK"]
  });
  //show alert
  alert.present();
}

  ionViewWillEnter(){
   this.getData();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
