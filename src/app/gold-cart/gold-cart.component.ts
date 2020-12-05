import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { GoldCartService } from '../gold-cart.service';
import { Gold } from '../gold-list/Gold';

@Component({
  selector: 'app-gold-cart',
  templateUrl: './gold-cart.component.html',
  styleUrls: ['./gold-cart.component.css']
})
export class GoldCartComponent implements OnInit {

  buyList: Gold[] = [];

  constructor(private cart: GoldCartService) { 
    cart.buyList.subscribe(c => this.buyList = c);
  }

  ngOnInit(): void {
  }

}
