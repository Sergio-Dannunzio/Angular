import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import{ Gold } from './gold-list/Gold';

@Injectable({
  providedIn: 'root'
})
export class GoldCartService {

  private _buyList: Gold[] = [];
  buyList: BehaviorSubject<Gold[]> = new BehaviorSubject(this._buyList);

  addToCart(gold: Gold) {
    let item: Gold = this._buyList.find((v1) => v1.name == gold.name);
    if(!item){
      this._buyList.push({...gold});
    }else{
      item.quantity += gold.quantity;
      item.price += ((gold.price)*gold.quantity);
    }
    this.buyList.next(this._buyList);
  }

  constructor() { }
}
