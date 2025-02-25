import { Body, Controller, Post } from '@nestjs/common';
import { ProductOrder } from './product-order.interface';
import { ProductOrderService } from './product-order.service';

/**
 * 只负责请求的部分
 */
@Controller('product-order')
export class ProductOrderController {
  constructor(private productOrderService: ProductOrderService) {}

  /**
   * Pipe 就是一个组件
   * 数据类型的转换 ParseIntPipe
   * 数据类型的校验
   */
  @Post('/order-create')
  public createOrder(@Body() body: ProductOrder) {
    const { productId, userId } = body;
    const order = this.productOrderService.createOrder({ productId, userId });
    if (!order) {
      return {
        msg: '订单创建失败',
        code: 500,
        success: false,
      };
    }
    return {
      msg: '订单创建成功',
      code: 200,
      success: true,
    };
  }
}
