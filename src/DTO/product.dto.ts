import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDTO {
  @MinLength(5, { message: 'Toi thieu pahi 5 ky tu' })
  id: number;
  @MinLength(10, { message: 'DKM TOI THIEU PHAI 1O KY TU ' })
  productName: string;
  @IsNotEmpty({ message: 'DKM giá không được bỏ trống ' })
  price: string;
  @IsNotEmpty({ message: 'DKM categoryId không được bỏ trống ' })
  categoryId: string;
}

export class ProductDTOId {
  id: number;
  @MinLength(10, { message: 'DKM TOI THIEU PHAI 1O KY TU ' })
  productName: string;
  @IsNotEmpty({ message: 'DKM giá không được bỏ trống ' })
  price: string;
  @IsNotEmpty({ message: 'DKM categoryId không được bỏ trống ' })
  categoryId: string;
}
