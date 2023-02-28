import { Component, EventEmitter , Input , Output } from '@angular/core';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent {
@Output() SendRequestToFather = new EventEmitter();
@Output() SendRequestToFather2 = new EventEmitter();
@Output() SendRequestToFather3 = new EventEmitter();

@Input() test : any ;


sendtofather(input : any)
  {
    this.SendRequestToFather.emit(input);
  }

  sendtofather2(input : any)
  {
    this.SendRequestToFather2.emit(input);
  }

  sendtofather3(input : any)
  {
    this.SendRequestToFather3.emit(input);
  }
}



