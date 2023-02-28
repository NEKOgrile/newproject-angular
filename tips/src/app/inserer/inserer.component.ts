import { Component, EventEmitter , Input , Output } from '@angular/core';

@Component({
  selector: 'app-inserer',
  templateUrl: './inserer.component.html',
  styleUrls: ['./inserer.component.css']
})
export class InsererComponent{
  @Output() SendRequestToFather = new EventEmitter();
  @Output() SendRequestToFather2 = new EventEmitter();




@Input() tips : number = 0;
@Input() nbrpersonne : number = 0;
@Input() prix: number = 0;

tipspersonnecalcul : number = 0;
prixpersonnecalcul : number = 0;

ngOnChanges() {
  this.tipspersonne(this.prix , this.tips , this.nbrpersonne);
  this.prixpersonne(this.prix , this.tips , this.nbrpersonne);
}





  tipspersonne(prix: any , tips : any , nbrpersonne : any) {
    this.tipspersonnecalcul = parseInt(prix, 10)  * (0.01 * parseInt(tips, 10))/ parseInt(nbrpersonne, 10);
  }
  
  prixpersonne(prix: any , tips : any , nbrpersonne : any) {
    this.prixpersonnecalcul = parseInt(prix, 10)  * (1+(0.01 * parseInt(tips, 10)))/ parseInt(nbrpersonne, 10);
  }



  sendtofather()
  {
    this.SendRequestToFather.emit(this.tipspersonnecalcul);
    this.SendRequestToFather2.emit(this.prixpersonnecalcul);

  }

}

