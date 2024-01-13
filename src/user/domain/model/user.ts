import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId, Types } from "mongoose";

@Schema({ timestamps: true })
export class User {
  @Prop({type: mongoose.SchemaTypes.ObjectId})
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop()
  password: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
