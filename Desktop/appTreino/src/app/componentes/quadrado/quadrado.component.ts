import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'quadrado.component',
  styleUrls : ['quadrado.component.scss'],
  templateUrl : 'quadrado.component.html',
})
export class QuadradoComponent {
    constructor(public toastController: ToastController) {}
    async presentToast() {
     const toast = await this.toastController.create({
       message: 'O resultado é '+this.area,
       duration: 4000
     });
     toast.present();
  }
area : Number = 0;
lado : Number = 0;
calcularArea():void{
 let lador = Number(this.lado);
 let area = lador*lador;
 this.area = area;
 this.presentToast();
}
}
