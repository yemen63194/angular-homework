import { Apartement } from './../core/Models/apartement';
import { Component } from '@angular/core';
import { Residence } from '../core/Models/residence';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartements',
  templateUrl: './apartements.component.html',
  styleUrls: ['./apartements.component.css']
})
export class ApartementsComponent {
  listResidences:Residence[]=[{id:1,"name":"El fel","address":"Borj Cedria","image":"../../assets/images/R1.jpeg"},{id:2,"name":"El yasmine","address":"Ezzahra","image":"../../assets/images/R2.jpg"},{id:3,"name":"El Arij","address":"Rades","image":"../../assets/images/R3.jpg"},{id:4,"name":"El Anber","address":"Manzah 5","image":"../../assets/images/R4.jpg"}];

  listApartments:Apartement[]=[{id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
  {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
  {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] }];
  listFavories:Apartement[]=[];
  sfiltrage: number | undefined; // New property for filtering by surface

  constructor(private actR:ActivatedRoute){
    

    }
    idResidence!:number;
    ngOnInit(){
      this.idResidence = this.actR.snapshot.params['idR'];
      this.listApartments=this.getApartementByResidence();
  }

  getApartementByResidence(){
    return this.listApartments.filter (ap =>{
      ap.residence.id == this.idResidence
    })
  }
addToFavorites(apartment :Apartement ) {
  this.listFavories.push(apartment);
}

filterBySurface(apartment: Apartement): boolean {
  return this.sfiltrage ? apartment.surface === this.sfiltrage : true;
}

}
