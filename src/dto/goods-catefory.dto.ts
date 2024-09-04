import { IsDate, IsString } from 'class-validator';

/**
 * 商品类目
 */
class GoodsCategory {
  /**
   * 商品类目id
   */
  @IsString()
  goods_category_id: string;
  /**
   * 商品类目名称
   */
  @IsString()
  goods_category_name: string;
  /**
   * 商品类目编号
   */
  @IsString()
  goods_category_code: string;
  /**
   * 创建时间
   */
  @IsString()
  @IsDate()
  create_time: string;
  /**
   * 最后修改时间
   */
  @IsString()
  last_update_time: string;
}
