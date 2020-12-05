import { Component, OnInit } from '@angular/core';
import { GoldCartService } from '../gold-cart.service';
import { Gold } from "./Gold";


@Component({
  selector: 'app-gold-list',
  templateUrl: './gold-list.component.html',
  styleUrls: ['./gold-list.component.css']
  
})
export class GoldListComponent implements OnInit {

  golds: Gold[] = [
    {
      name: "Gold 24K",
      price: 250,
      quantity: 0,
      sale: false,
    },
    {
      name: "Gold 22K",
      price: 250,
      quantity: 0,
      sale: false,
    },
    {
      name: "Gold 18K",
      price: 250,
      quantity: 0,
      sale: true,
    },
    {
      name: "Gold 14K",
      price: 250,
      quantity: 0,
      sale: true,
    },
    {
      name: "Gold 10K",
      price: 250,
      quantity: 0,
      sale: false,
    }

  ];


  constructor(private cart: GoldCartService) {

   }

  ngOnInit(): void {

  }

  addToCart(gold): void{
    this.cart.addToCart(gold);
    gold.quantity = 0;
  }


}
