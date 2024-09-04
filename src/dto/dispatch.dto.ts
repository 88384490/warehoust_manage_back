import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { GoodsInfo } from './common/goods-info';
import { UserInfo } from './common/user-info';

export class Dispatch {
  /**
   * 出库单id
   */
  @IsString()
  dispatch_id: string;
  /**
   * 出库单编号
   */
  @IsString()
  dispatch_code: string;
  /**
   * 出库单状态
   */
  @IsString()
  dispatch_status: string;
  /**
   * 总数
   */
  @IsNumber()
  total: number;
  /**
   * 单位
   */
  @IsString()
  unit: string;
  /**
   * 商品信息
   */
  @IsNotEmpty()
  goods_info: GoodsInfo;
  /**
   * 创建人
   */
  @IsNotEmpty()
  create_user_info: UserInfo;
  /**
   * 出库人
   */
  @IsNotEmpty()
  dispatch_user_info: UserInfo;
}
