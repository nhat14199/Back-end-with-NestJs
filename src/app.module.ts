import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddeware } from './middleware/logger.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/products'),
    ProductModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddeware).forRoutes('*');
  }
}
