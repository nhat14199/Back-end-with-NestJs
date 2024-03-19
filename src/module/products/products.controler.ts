import { httpMessagePost } from './../../global/golbalEnum';
import { ResponseData, ResponseDataFromServer } from 'src/global/globalClass';
import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { HttpMessage, HttpStatus, httpStatusPost } from 'src/global/golbalEnum';
import { Product } from 'src/models/product.models';
import { ProductDTO } from 'src/DTO/product.dto';
import { ProductSchema, Products } from 'src/schemas/product.schemas';

@Controller('products')
export class ProductController {
  /* controller trong NestJS là nơi xử lý các request HTTP đến với ứng dụng. 
Nó đóng vai trò như một bộ điều khiển, nhận các request và trả về response tương ứng.

Chức năng chính của file controller:
- Xác định các route cho ứng dụng.
- Xử lý các HTTP request (GET, POST, PUT, DELETE, vv).
- See your customer response.
- Tương tác với các service khác trong ứng dụng. */

  // Khi truy cập vào url controller products thì nó sẻ đi khởi tao cái đối tượng product service

  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProduct(): Promise<ResponseData<Products[]>> {
    try {
      const productss = await this.productService.getProduct();
      return new ResponseData<Products[]>(
        productss,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Products[]>(
        [],
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Post()
  async createNewProduct(
    @Body(new ValidationPipe()) productDTO: ProductDTO,
  ): Promise<ResponseData<Products[]>> {
    try {
      const postProduct: any =
        await this.productService.createNewProduct(productDTO);
      return new ResponseData<Products[]>(
        postProduct,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch {
      return new ResponseData<Products[]>(
        null,
        httpStatusPost.ERROR,
        httpMessagePost.ERROR,
      );
    }
  }
  @Get('/:id')
  async getProductDetail(
    @Param('id') id: number,
  ): Promise<ResponseData<Products[]>> {
    try {
      const updateProduct: any = await this.productService.getProductDetail(id);
      return new ResponseData<Products[]>(
        updateProduct,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Products[]>(
        error,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put('/:id')
  async updateProduct(
    @Body(new ValidationPipe()) productDTO: ProductDTO,
    @Param('id') idFromClient: number,
  ): Promise<ResponseData<Products[]>> {
    try {
      const update: any = await this.productService.updateProduct(
        productDTO,
        idFromClient,
      );
      return new ResponseData<Products[]>(
        update,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Products[]>(
        error,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Delete('/:id')
  async deleteProduct(
    @Param('id') id: number,
  ): Promise<ResponseData<Products[]>> {
    try {
      const deleteProduct: any = await this.productService.deleteProduct(id);
      return new ResponseData<Products[]>(
        deleteProduct,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Products[]>(
        error,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
