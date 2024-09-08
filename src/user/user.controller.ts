import { Body, Controller, Post, Get, Query } from '@nestjs/common';
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
  public async queryUserList(@Query() query: any) {
    const { user_name, is_valid, page_index, page_size } = query;
    const userInfoList = await this.userService.queryUserList({
      user_name,
      is_valid,
      page_index,
      page_size,
    });
    return {
      code: 200,
      success: true,
      ...userInfoList,
    };
  }
  // 根据查询用户信息
  @Get('queryUserInfo')
  public async queryUserinfo(@Query() query: any) {
    const { user_id } = query;
    return { code: 200, success: true, data: user_id };
  }

  // 验证用户信息
  // cookie
  public checkAccount() {
    return '';
  }
}
