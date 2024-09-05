import { Injectable } from '@nestjs/common';
import * as AV from 'leancloud-storage';
import { forIn } from 'lodash';
import { UserInfo } from '../dto/user-info.dto';

@Injectable()
export class UserService {
  private AV: any;
  private userObject: any;
  private queryObject: any;

  constructor() {
    this.AV = AV;
    this.AV.init({
      appId: 'VJghmrbKBXmDFdu6J9IYA6Uj-gzGzoHsz',
      appKey: 'bcF09okkFoxC4mA4650NQcam',
      serverURL: 'https://vjghmrbk.lc-cn-n1-shared.com',
    });
    this.userObject = new this.AV.Object('UserInfo');
    this.queryObject = new this.AV.Query('UserInfo').descending('createdAt');
  }

  public async createUserInfo(user: UserInfo) {
    forIn(user, (value, key) => {
      this.userObject.set(key, value);
    });
    const saveResult = await this.userObject.save();
    //1. 验证用户名是否重复
    //2. 存入数据库
    return { success: true, data: saveResult.id, msg: '用户创建成功' };
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
  public async queryUserList() {
    const queryResult = await this.queryObject.find();
    return { success: true, data: queryResult, msg: '查询成功' };
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
