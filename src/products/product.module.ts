import { Module } from '@nestjs/common';
import { ProductController } from './products.controler';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductSchema } from 'src/schemas/product.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Products.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

/*
File module trong NestJS là nơi tổ chức các thành phần của ứng dụng, bao gồm controllers, services, providers,
 vv Nó giúp quản lý các dependency và cấu hình cho các thành phần này.

Chức năng chính this file module:

Tổ chức các thành phần của ứng dụng.
Quản lý các dependency.
Cấu hình cho các thành phần.
Cung cấp điểm khởi tạo cho ứng dụng

*/
