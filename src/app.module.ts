import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { ProductModule } from './module/products/product.module';
import { AppController } from './app.controller';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
