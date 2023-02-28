export class Calcul {
  //attribut de la classe
  PrixPersonne = 0;
  TipsPersonne = 0;

  constructor(){  }

  CalculePrixPersonne(){
    this.PrixPersonne = (this.PrixTotal * ( 1 + ( 0.01 * this.Tips ))) / this.NbrPers
  }

  CalculeTipsPersonne(){
    this.TipsPersonne = (this.PrixTotal ( 0.01 this.Tips )) / this.NbrPers
    return (this.TipsPersonne)
  }
}
