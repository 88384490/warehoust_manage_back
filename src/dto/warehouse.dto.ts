import { GoodsInfo } from './common/goods-info';
import { UserInfo } from './common/user-info';

export class Warehouse {
  /**
   * 入库单id
   */
  warehouse_id: string;
  /**
   * 到货通知书编号
   */
  warehouse_code: string;
  /**
   * 批次
   */
  batch: string;
  /**
   * 入库日期
   */
  entry_timestamp: string;
  /**
   * 商品信息
   */
  goods_info: GoodsInfo;
  /**
   * 出库人员信息
   */
  user_info: UserInfo;
}
