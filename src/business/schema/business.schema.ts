import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BusinessDocument = HydratedDocument<Business>;

@ObjectType()
@Schema()
export class Business {

  @Field(() => ID)
  get id(): Types.ObjectId {
    return this.id
  }

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  nic: string;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);