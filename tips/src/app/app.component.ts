import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tips';
  prix : any;
  tips : any;
  nbrpersonne : any ;
  

  reponse(prixcomming : any){
    this.prix = prixcomming;
  }
  
  reponse2(tipscomming : any){
    this.tips = tipscomming;
  }

  reponse3(nbrpersonnecomming : any){
    this.nbrpersonne = nbrpersonnecomming;
  }
}
