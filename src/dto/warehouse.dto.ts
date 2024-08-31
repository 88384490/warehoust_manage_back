import { IsString } from 'class-validator';
import { GoodsInfo } from './common/goods-info';
import { UserInfo } from './common/user-info';

export class Warehouse {
  /**
   * 入库单id
   */
  @IsString()
  warehouse_id: string;
  /**
   * 到货通知书编号
   */
  @IsString()
  warehouse_code: string;
  /**
   * 批次
   */
  @IsString()
  batch: string;
  /**
   * 入库日期
   */
  @IsString()
  entry_timestamp: string;
  /**
   * 商品信息
   */
  @IsString()
  goods_info: GoodsInfo;
  /**
   * 出库人员信息
   */
  @IsString()
  user_info: UserInfo;
}
