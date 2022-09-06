/*
 * @Author: ztao
 * @Date: 2022-09-04 18:56:48
 * @LastEditTime: 2022-09-06 18:34:44
 * @Description:
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
