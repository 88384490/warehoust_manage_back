import { IsNumber, IsString } from 'class-validator';

class GoodsInfo {
  /**
   * 商品id
   */
  @IsString()
  goods_id: string;
  /**
   * 商品编码
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
   * 商品体积
   */
  @IsString()
  goods_volume: string;
  /**
   * 商品描述
   */
  @IsString()
  description: string;
}

class LocationInfo {
  /**
   * 库位长
   */
  @IsNumber()
  location_length: number;
  /**
   * 库位宽
   */
  @IsNumber()
  location_width: number;
  /**
   * 库位容积
   */
  @IsNumber()
  location_volume: number;
  /**
   * 存放商品信息
   */
  goods_info: GoodsInfo;
}

export class Store {
  /**
   * 仓库id
   */
  @IsString()
  store_id: string;
  /**
   * 仓库名称
   */
  @IsString()
  store_name: string;
  /**
   * 地址
   */
  @IsString()
  path: string;
  /**
   * 仓库容积
   */
  @IsString()
  storage_volume: string;
  /**
   * 负责人
   */
  @IsString()
  user_name: string;
  /**
   * 库位
   */
  localtion_info: LocationInfo;
  /**
   * 创建时间
   */
  @IsString()
  create_time: string;
  /**
   * 修改时间
   */
  @IsString()
  update_time: string;
}
