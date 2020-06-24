import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: {
      zip: 48149,
      city: 'Muenster',
      country: 'DE'
    },
    interests: ['Ionic', 'Angular', 'YouTube', 'Sports'
   ]
  };

  suppe = {
    name : 'gemuese suppe',
    id : '1',
    ingredients: ['Kartoffel' , 'Paprika', 'Zuchini', 'Brokkoli', 'Zwiebel', 'Salz', 'Pfeffer'],
    instructions: 'yap, et, halllet, tuzla muzla cuzla. iyice yika filan flan yap.yap, et, halllet, tuzla muzla cuzla. iyice yika filan flan yap.yap, et, halllet, tuzla muzla cuzla. iyice yika filan flan yap.yap, et, halllet, tuzla muzla cuzla. iyice yika filan flan yap.yap, et, halllet, tuzla muzla cuzla. iyice yika filan flan yap.yap, et, halllet, tuzla muzla cuzla. iyice yika filan flan yap.'
  }

  constructor(private router: Router, private storage: Storage) {}

  openDetailsWithQueryParams() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        // special: 'whateverrrr'
        // special: JSON.stringify(this.user)
        special: JSON.stringify(this.suppe)
      }
    }

    this.router.navigate(['details'], navigationExtras); 

  }




  addfood() {

  }


  getfood() {

  }


  openDetailsWithService() {

  }

  openDetailsWithState() {

  }



  setStorage() {
    this.storage.set('name', 'suppe');
  }

}
