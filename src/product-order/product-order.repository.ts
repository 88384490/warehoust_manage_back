import { Injectable } from '@nestjs/common';
import { ProductOrder } from './product-order.interface';
import fs from 'node:fs/promises';
import path from 'path';

@Injectable()
export class ProductOrderRepository {
  /**
   * id
   * productId
   * productName
   * userId
   */

  public saveOrder(orderInfo: ProductOrder) {
    const pathStr = path.join(__dirname, '../data/product-order.json');
    console.log('pathstr', pathStr);

    return pathStr;
  }
}
