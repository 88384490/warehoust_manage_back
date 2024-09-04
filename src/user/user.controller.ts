import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // 创建用户信息
  @Post('createUserInfo')
  public createUserInfo() {
    const userInfo = this.userService.createUserInfo();
    return {
      code: 200,
      msg: '创建成功',
      success: true,
      ...userInfo,
    };
  }
  // 删除用户
  @Post('removeUserInfo')
  public removeUserInfo() {
    return '';
  }
  // 修改用户信息
  @Post('updateUserInfo')
  public updateUserInfo() {
    return '';
  }
  // 查询用户信息列表
  @Post('queryUserList')
  public queryUserList() {
    return '';
  }
  // 根据查询用户信息
  @Post('queryUserinfo')
  public queryUserinfo() {
    return '';
  }

  // 验证用户信息
  // cookie
  public checkAccount() {
    return '';
  }
}
