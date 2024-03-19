import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Products extends Document {
  @Prop()
  id: string;
  @Prop()
  productName: string;
  @Prop()
  price: string;
  @Prop()
  categoryId: string;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
