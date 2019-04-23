import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueueEditPage } from './queue-edit';

@NgModule({
  declarations: [
    QueueEditPage,
  ],
  imports: [
    IonicPageModule.forChild(QueueEditPage),
  ],
})
export class QueueEditPageModule {}
