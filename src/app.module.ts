import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import * as cookieParser from 'cookie-parser';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(cookieParser())
    .forRoutes('*');
  }
}
