import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDTO } from 'src/DTO/product.dto';
import { Product } from 'src/models/product.models';
import { Model } from 'mongoose';
import { ProductSchema, Products } from 'src/schemas/product.schemas';

const data = [
  { id: 1, productName: 'Iphone ', price: '1200 usd ', categoryId: '1' },
  { id: 2, productName: 'MacPro ', price: '1999 usd ', categoryId: '1' },
  { id: 3, productName: 'Ipad ', price: '899 usd ', categoryId: '1' },
  { id: 4, productName: 'apple watch ', price: '399 usd ', categoryId: '1' },
  { id: 5, productName: 'apple watch ', price: '399 usd ', categoryId: '1' },
  { id: 6, productName: 'apple watch ', price: '399 usd ', categoryId: '1' },
  { id: 7, productName: 'apple watch ', price: '399 usd ', categoryId: '1' },
];
@Injectable()
export class ProductService {
  private productData: Product[] = data;

  constructor(
    @InjectModel(Products.name) private readonly productModel: Model<Products>,
  ) {}

  async getProduct(): Promise<Products[]> {
    return await this.productModel.find().exec();
  }
  async createNewProduct(productDto: ProductDTO): Promise<Products[]> {
    const newProduct: any = new this.productModel(productDto);
    console.log('newProduct', newProduct);
    return await newProduct.save();
  }
  async getProductDetail(id: number): Promise<Products[]> {
    const currentData = await this.productModel.find().exec();
    const data: any = currentData.find((item) => item.id === id);
    return data;
  }

  async updateProduct(
    productDTO: ProductDTO,
    idFromClient: number,
  ): Promise<Products[]> {
    try {
      // Tìm sản phẩm cần cập nhật trong cơ sở dữ liệu
      const updatedProduct: any = await this.productModel
        .findOneAndUpdate(
          { id: idFromClient }, // Điều kiện tìm kiếm
          { $set: productDTO }, // Dữ liệu mới cần cập nhật
          { new: true }, // Tùy chọn để trả về sản phẩm đã được cập nhật
        )
        .exec();

      if (!updatedProduct) {
        throw new Error('Không tìm thấy sản phẩm để cập nhật');
      }

      return updatedProduct;
    } catch (error) {
      // Xử lý lỗi nếu có
      throw new Error(`Lỗi khi cập nhật sản phẩm: ${error.message}`);
    }
  }

  async deleteProduct(idFromClient: number): Promise<Products[]> {
    console.log('id', idFromClient);
    const deleteProducts: any = await this.productModel
      .deleteOne({ id: idFromClient }, { new: true })
      .exec();

    return deleteProducts;
  }
}

/*
File service trong NestJS là nơi chứa các logic xử lý nghiệp vụ của ứng dụng. Nó được sử dụng để thực hiện các thao tác như
 truy cập database, xử lý dữ liệu, vv

Check this file service:
- Chứa các logic xử lý nghiệp vụ của ứng dụng.
- Truy cập database và thao tac dữ liệu.
- Xử lý các yêu cầu từ controller.
- Cung cấp dữ liệu cho controller.
*/
