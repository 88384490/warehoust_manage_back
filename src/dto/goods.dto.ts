import { IsNumber, IsString } from 'class-validator';

/**
 * 商品容积
 */
class GoodsVolume {
  /**
   * 商品长
   */
  @IsNumber()
  goods_length: number;
  /**
   * 商品宽
   */
  @IsNumber()
  goods_width: number;
  /**
   * 商品高
   */
  @IsNumber()
  goods_height: number;
}

export class Goods {
  /**
   * 商品id
   */
  @IsString()
  goods_id: string;
  /**
   * 商品编号
   */
  @IsString()
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
