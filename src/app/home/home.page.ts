import {Component} from '@angular/core';
import {AlertController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private bg: string;
  private devWidth: any;

  constructor(private plt: Platform, private alertController: AlertController) {

    this.bg = './../../assets/lg.svg';

    this.devWidth = this.plt.width();

    //this.displayAlert('this.devWidth:' + this.devWidth);
  }

  async displayAlert(mess) {
    const alert = await this.alertController.create({
      message: mess,
      buttons: ['OK']
    });

    await alert.present();
  }

}
