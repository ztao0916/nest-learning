/*
 * @Author: ztao
 * @Date: 2022-09-06 18:32:25
 * @LastEditTime: 2022-09-06 18:40:07
 * @Description: 处理user模块类的引用和共享
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
