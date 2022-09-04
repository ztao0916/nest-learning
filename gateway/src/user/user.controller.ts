/*
 * @Author: ztao
 * @Date: 2022-09-04 18:37:15
 * @LastEditTime: 2022-09-04 18:47:52
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getHello(): string {
    return '你好,我是用户controller';
  }
}
