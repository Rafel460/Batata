import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector : 'circulo.component',
  styleUrls : ['circulo.component.scss'],
  templateUrl : 'circulo.component.html',
})
export class CirculoComponent{
  constructor(public toastController: ToastController) {}
  async presentToast() {
   const toast = await this.toastController.create({
     message: 'O resultado é '+this.area,
     duration: 4000
   });
   toast.present();
}
 raio : Number = 0;
 area : Number = 0;

  calcularArea():void{
    const PI = 3.1412;
   let raio = Number(this.raio);
   let area =  PI * (raio*raio);
   this.area = area;
   this.presentToast();
  }

}
