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

general : number = 0;

ngOnChanges() {
  this.reponse(this.prix , this.tips);
}


sendtofather()
  {
    this.SendRequestToFather.emit(this.prix);
    this.SendRequestToFather2.emit(this.tips);
    //this.SendRequestToFather.emit(this.nbrpersonne);
  }

  reponse(prix: any , tips : any) {
    this.nbrpersonne = parseInt(prix, 10) + parseInt(tips, 10);
  }
}

