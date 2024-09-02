import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public createUserInfo() {
    // 1. 验证用户名是否重复
    // 2. 存入数据库
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
