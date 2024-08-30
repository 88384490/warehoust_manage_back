class GoodsInfo {
  /**
   * 商品id
   */
  goods_id: string;
  /**
   * 商品编码
   */
  gosods_code: string;
  /**
   * 商品名称
   */
  goods_name: string;
  /**
   * 商品类目
   */
  goods_category: string;
  /**
   * 商品体积
   */
  goods_volume: string;
  /**
   * 商品描述
   */
  description: string;
}

class LocaltionInfo {
  /**
   * 库位长
   */
  localtion_length: number;
  /**
   * 库位宽
   */
  localtion_width: number;
  /**
   * 库位容积
   */
  localtion_volume: number;
  /**
   * 存放商品信息
   */
  goods_info: GoodsInfo;
}

export class Store {
  /**
   * 仓库id
   */
  store_id: string;
  /**
   * 仓库名称
   */
  store_name: string;
  /**
   * 地址
   */
  path: string;
  /**
   * 仓库容积
   */
  storage_volume: string;
  /**
   * 负责人
   */
  user_name: string;
  /**
   * 库位
   */
  localtion_info: LocaltionInfo;
  /**
   * 创建时间
   */
  create_time: string;
  /**
   * 修改时间
   */
  update_time: string;
}
