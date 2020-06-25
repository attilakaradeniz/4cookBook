import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Item,  DataService } from '../services/data.service';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: Item[] = [];
  
  testArray: Item[] = [];
  testString:string = "testStringggggg";
  newItem: Item = <Item>{};


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

  duppe = {
    name : '',
    id : '',
    ingredients: [],
    instructions: ''
  }
  
  public fName: string;
  public fInstructions:string;
  public fIngredients:string;

  

  // constructor(private router: Router, private storage: Storage, private storageService: StorageService, private plt: Platform, private toastController: ToastController) {}
  constructor(private router: Router, private storage: Storage, private toastController: ToastController, private plt: Platform, private dataService: DataService) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  openDetailsWithQueryParams() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        // special: 'whateverrrr'
        // special: JSON.stringify(this.user)
        // special: JSON.stringify(this.suppe)
        // special: JSON.stringify(this.)
        special: JSON.stringify(this.duppe)
        // special : obj
      }
    }
    this.showToast('added!');
    this.router.navigate(['details'], navigationExtras); 
  }




  addItem() {

    console.log('GRRRR');
    this.dataService.addItem(this.newItem).then(item => {
      //let itemInstruc = item[0].instructions;
      //  this.suppe.name = item[0].name;
      //  this.suppe.ingredients = item[0].ingredients;
      //  this.suppe.instructions = item[0].instructions;

      // this.suppe.name = 'fut';
      // this.suppe.ingredients = ['yabadabaduuuu', 'duuuu'];
      // this.suppe.instructions = 'yapistebisilerolsunbitsin';
      
      // this.duppe.name = this.fName;
      // this.duppe.ingredients = this.fIngredients;
      // this.duppe.instructions = this.fInstructions;
      
      console.log('then(item =>', item)
      console.log('item[0].name ', item[0].name);
      console.log('item[0].ingredients ', item[0].ingredients);
      //console.log('item[0].intructions.toString(); ', item[0].instructions.toString());
      console.log('item[0].instructions: ', item[0].instructions);
      //console.log('item[0].intructions[0] ', typeof(item[0].instructions));

      //this.items.push(name);
      //this.testArray.push(item[0]);
      //this.newItem = <Item>{};
      this.showToast('Food yummed!')
      this.loadItems();
      // console.log('aytim: ', TESTOSIKOS);
      // console.log('this.newItem[0]-------', this.newItem[0]);
      // console.log('this.items-----', this.items);
      // console.log('neWItemOS------: ', this.newItem.name, this.newItem.intructions, this.newItem.ingredients, this.newItem.id);
      // console.log('TESTOSIKOS-----', TESTOSIKOS[0].name);
    })
    // console.log('yeni', this.testArray);
    // console.log('yeni str', JSON.stringify(this.testArray));
     //this.openDetailsWithQueryParams();
     console.log('BU NEREDE BU!!!', this.suppe);
     console.log('BU NEREDE BU!!!', this.duppe);
  }




  getFood() {
    let tempString ="";
    let arrayTemp = [];
    this.duppe.name = this.fName;
    //this.duppe.ingredients = this.fIngredients;
    tempString = this.fIngredients;
    this.duppe.instructions = this.fInstructions;

    arrayTemp = tempString.split(" ");
    this.duppe.ingredients = arrayTemp;
    
    this.openDetailsWithQueryParams();

  }

  loadItems() {
    this.dataService.getItems().then(items => {
        this.items = items;
    });
  }


  openDetailsWithService() {

  }

  openDetailsWithState() {

  }



  setStorage() {
    this.storage.set('name', 'suppe');
  }



  // helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
  }

}
