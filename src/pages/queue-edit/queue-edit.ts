import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the QueueEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-queue-edit',
  templateUrl: 'queue-edit.html',
})
export class QueueEditPage {
  queuebarber = {
    QueueID:"",
    BarberName:"",
    QueueStatus:"",
    QueueDate:"",
    QueueTime:""

  };
  data:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl:AlertController,public httpClient:HttpClient) {
    let qid=this.navParams.get('QueueID');
    let url = "http://localhost:8080/queuebarber/" + qid;
    console.log(url)
    this.http.get(url).map(res => res.json()).subscribe(data => {this.queuebarber = data}); 
  }

  QueueEdit(){
    let qid=this.navParams.get('QueueID');
    let url = "http://localhost:8080/queuebarber/" + qid;
      this.httpClient.post(url,this.queuebarber)
      .subscribe(
        res=>{
          this.data =res;
            if(this.data.msg==true){
            this.showAlert("Success","Data Update");
            this.navCtrl.popToRoot();
          }
        }
      );
    }
    //สร้าง Alert Message
    showAlert(msgTitle:string, message:string){
        const alert = this.alertCtrl.create({
          title: msgTitle,
          subTitle: message,
          buttons: ["OK"]
        });
        //show alert
        alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueueEditPage');
  }

}
