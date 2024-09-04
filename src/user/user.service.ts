import { Injectable } from '@nestjs/common';
import * as AV from 'leancloud-storage';
import { UserInfo } from '../dto/user-info.dto';
import { forIn } from 'lodash';

@Injectable()
export class UserService {
  private AV: any;

  constructor() {
    this.AV = AV;
    this.AV.init({
      appId: 'VJghmrbKBXmDFdu6J9IYA6Uj-gzGzoHsz',
      appKey: 'bcF09okkFoxC4mA4650NQcam',
      serverURL: 'https://vjghmrbk.lc-cn-n1-shared.com',
    });
  }

  public async createUserInfo(user: UserInfo) {
    //const userObject = new this.AV.Object('UserInfo');
    //const user = new UserInfo();
    //user.user_name = '周毅';
    //user.user_role = 'administrator';
    //user.is_valid = true;
    //forIn(user, (value, key) => {
    //userObject.set(key, value);
    //});
    //const saveResult = userObject.save();
    // 1. 验证用户名是否重复
    // 2. 存入数据库
    //return { success: true, data: saveResult.id };
    return { success: true, data: user };
  }
  // 删除用户
  public removeUserInfo() {
    return '';
  }
  // 修改用户信息
  public updateUserInfo() {
    return '';
  }
  // 查询用户信息列表
  public queryUserList() {
    return '';
  }
  // 根据查询用户信息
  public queryUserInfo() {
    return '';
  }

  public checkAccount() {
    // 1. 验证用户信息，验证权限是否为管理员账户，管理员账户可以操作所有用户信息
    // 2. 验证用户信息，验证权限是否为仓库管理者，仓库管理者可以操作仓库当班组长和员工的信息
    return '';
  }
}
