import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { threadId } from 'worker_threads';


//

export interface Item {
  id: number,
  name: string,
  ingredients: string,
  intructions: string
}

const ITEMS_KEY = 'food-item';

//
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(private storage: Storage) { }
  constructor(private storage: Storage) { }
  
  // create
  addItem(item: Item): Promise<any> {
      return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
        if(items) {
          items.push(item);
          return this.storage.set(ITEMS_KEY, [item]);
     
        } else {
          return this.storage.set(ITEMS_KEY, [item]);
        }
      });
  }
  
  // read
  getItem() {

  }

  // update
  updateItem(item: Item) {

  }

  // delete
  deleteItem(id: number) {

  }



}
