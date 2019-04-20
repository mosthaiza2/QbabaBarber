import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



/**
 * Generated class for the QueuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html',
})
export class QueuePage {
 
  queuebarber = {
    QueueID:"",
    BarberName:"",
    QueueStatus:"",
    QueueDate:"",
    QueueTime:""

  };
  data:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,private alertCtrl:AlertController) {
  }

  Queue(){
    let url= "http://localhost:8080/queuebarber";
    this.http.post(url,this.queuebarber)
      .subscribe(
        res=>{
          this.data =res;
          if(this.data.msg==true){
            this.showAlert("Success","Data added");
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
    console.log('ionViewDidLoad QueuePage');
  }

}
