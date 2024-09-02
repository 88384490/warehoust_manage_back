import { Injectable } from '@nestjs/common';
import { ProductOrder } from './product-order.interface';
import { ProductOrderRepository } from './product-order.repository';

/**
 * 负责业务逻辑
 */
@Injectable()
export class ProductOrderService {
  constructor(private productOrderRepository: ProductOrderRepository) {}

  /**
   * 保存订单
   */
  public createOrder(orderInfo: { productId: string; userId: string }) {
    //const productInfo = this.productOrderRepository.checkOrderValid();
    return '';
  }

  public queryOrderById(productId: string) {
    return '';
  }

  public queryOrderList() {
    return this.productOrderRepository.queryProductOrderList();
  }
}
