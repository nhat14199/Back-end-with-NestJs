import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Users extends Document {
  @Prop()
  userName: string;
  @Prop()
  address: string;
  @Prop()
  userId: string;
  @Prop()
  Identification: Number;
  @Prop()
  status: boolean;
  @Prop()
  id: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);
