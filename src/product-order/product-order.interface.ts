import { isString } from 'class-validator';

export interface ProductOrder {
  // 主id
  id: string;
  // 产品id
  productId: string;
  // 产品名称
  productName: string;
  // 用户id
  userId: string;
  // 地址
  path: string;
  // 购买数量
  items: string;
}
