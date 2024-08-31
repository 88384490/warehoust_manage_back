import { Injectable } from '@nestjs/common';
import { ProductOrder } from './product-order.interface';
import path from 'path';
import { readFileSync } from 'fs';

@Injectable()
export class ProductOrderRepository {
  /**
   * id
   * productId
   * productName
   * userId
   */

  public saveOrder(orderInfo: ProductOrder) {
    const productInfo: ProductOrder[] = JSON.parse(
      readFileSync('../data/product.json', 'utf-8'),
    );
    return productInfo;
  }

  public queryProductOrderList() {
    const productOrderes: ProductOrder[] = JSON.parse(
      readFileSync('../data/product-order.json', 'utf-8'),
    );
    if (productOrderes?.length === 0) {
      return [];
    }
    return productOrderes;
  }
}
