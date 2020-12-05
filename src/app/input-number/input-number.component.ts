import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input()
  quantity: number;
  
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }


  ngOnInit(): void {
  }

  upQuantity(): void{
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  downQuantity(): void{
    if (this.quantity >0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event): void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}
