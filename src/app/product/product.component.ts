import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() name ;
  @Input() price ;
  @Input() quantity;
  @Output() quantityChanged=new EventEmitter()
  createdAt=new Date()

  constructor() {
  }

  ngOnInit() {
  }

  changeQuantity(qty){
    this.quantity+=qty;
    this.quantityChanged.emit('produt '+this.name + ' nouvelle quantité : '+this.quantity)
  }

}
