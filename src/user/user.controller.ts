import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInfo } from '../dto/user-info.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // 创建用户信息
  @Post('createUserInfo')
  public async createUserInfo(@Body() body: UserInfo) {
    const userInfo = await this.userService.createUserInfo(body);
    return {
      code: 200,
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
  @Get('queryUserList')
  public async queryUserList() {
    const userInfoList = await this.userService.queryUserList();
    return {
      code: 200,
      success: true,
      ...userInfoList,
    };
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
