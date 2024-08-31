import { GoodsVolume } from './common/goods-volume';
import { IsNumber, IsString } from 'class-validator';

export class Goods {
  /**
   * 商品id
   */
  @IsString({ message: '商品id必须为string类型' })
  goods_id: string;
  /**
   * 商品编号
   */
  @IsString({ message: '商品编号必须为string类型' })
  goods_code: string;
  /**
   * 商品名称
   */
  @IsString()
  goods_name: string;
  /**
   * 商品类目
   */
  @IsString()
  goods_category: string;
  /**
   * 商品容积
   */
  goods_volume: GoodsVolume;
  /**
   * 商品成本
   */
  @IsNumber()
  goods_cost: number;
  /**
   * 商品价格
   */
  @IsNumber()
  goods_price: number;
  /**
   * 商品描述
   */
  @IsString()
  description: string;
  /**
   * 创建时间
   */
  @IsString()
  create_time: string;
  /**
   * 最后更新时间
   */
  @IsString()
  last_update_time: string;
}