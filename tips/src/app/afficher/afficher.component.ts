import { Component, EventEmitter , Input , Output } from '@angular/core';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent {
@Output() SendRequestToFather = new EventEmitter();
@Input() test : any ;


sendtofather(input : any)
  {
    this.SendRequestToFather.emit(input);
  }
}
