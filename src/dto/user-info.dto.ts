import { IsString } from 'class-validator';

export class UserInfo {
  /**
   * 用户id
   */
  @IsString()
  user_id: string;
  /**
   * 用户名称
   */
  @IsString()
  user_name: string;
  /**
   * 用户角色
   */
  @IsString()
  user_role: string;
  /**
   * 是否生效
   */
  @IsString()
  is_valid: boolean;
  /**
   * 创建时间
   */
  @IsString()
  create_time: string;
  /**
   * 最后修改时间
   */
  @IsString()
  last_update_time: string;
}
