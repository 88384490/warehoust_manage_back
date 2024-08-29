import { Injectable } from '@nestjs/common';
import { ProductOrder } from './product-order.interface';
import { ProductOrderRepository } from './product-order.repository';

/**
 * 负责业务逻辑
 */
@Injectable()
export class ProductOrderService {
  constructor(
    private readonly productOrderRepository: ProductOrderRepository,
  ) { }
  

  /**
   * 保存订单
   */
  public saveOrder(orderInfo: ProductOrder) {
    return this.productOrderRepository.saveOrder(orderInfo)
  }
}
