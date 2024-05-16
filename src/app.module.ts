import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/products'),
    ProductModule , UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
