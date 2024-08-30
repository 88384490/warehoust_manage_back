/**
 * 商品容积
 */
class GoodsVolume {
  /**
   * 商品长
   */
  goods_length: number;
  /**
   * 商品宽
   */
  goods_width: number;
  /**
   * 商品高
   */
  goods_height: number;
}

export class Goods {
  /**
   * 商品id
   */
  goods_id: string;
  /**
   * 商品编号
   */
  goods_code: string;
  /**
   * 商品名称
   */
  goods_name: string;
  /**
   * 商品类目
   */
  goods_category: string;
  /**
   * 商品容积
   */
  goods_volume: GoodsVolume;
  /**
   * 商品成本
   */
  goods_cost: number;
  /**
   * 商品价格
   */
  goods_price: number;
  /**
   * 商品描述
   */
  description: string;
  /**
   * 创建时间
   */
  create_time: string;
  /**
   * 最后更新时间
   */
  last_update_time: string;
}
