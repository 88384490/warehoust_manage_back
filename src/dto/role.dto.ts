/**
 * 角色
 */
import { IsBoolean, IsString } from 'class-validator';

export class Role {
  /**
   * 角色id
   */
  @IsString()
  role_id: string;
  /**
   * 角色名称
   */
  @IsString()
  role_name: string;
  /**
   * 是否生效
   */
  @IsBoolean()
  is_valid: boolean;
  /**
   * 创建时间
   */
  create_time: string;
  /**
   * 最后修改时间
   */
  last_update_time: string;
}
