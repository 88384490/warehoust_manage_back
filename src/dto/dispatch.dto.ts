import { GoodsInfo } from './common/goods-info';
import { UserInfo } from './common/user-info';

export class Dispatch {
  /**
   * 出库单id
   */
  dispatch_id: string;
  /**
   * 出库单编号
   */
  dispatch_code: string;
  /**
   * 出库单状态
   */
  dispatch_status: string;
  /**
   * 总数
   */
  total: number;
  /**
   * 单位
   */
  unit: string;
  /**
   * 商品信息
   */
  goods_info: GoodsInfo;
  /**
   * 创建人
   */
  create_user_info: UserInfo;
  /**
   * 出库人
   */
  dispatch_user_info: UserInfo;
}
