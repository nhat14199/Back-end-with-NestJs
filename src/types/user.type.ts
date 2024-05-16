import { Types } from 'mongoose';

export interface UsersType {
  _id: Types.ObjectId;
  userName: string;
  address: string;
  userId: string;
  Identification: number;
  status: boolean;
  id: string;
}
