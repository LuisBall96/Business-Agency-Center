import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Employee } from 'src/employee/schema/employee.schema';
import { BusinessType, PropertyType } from '../enum/business-types.enum';

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

  @Field(() => BusinessType)
  @Prop()
  businessType: BusinessType;

  @Field(() => PropertyType)
  @Prop()
  businessPropertyType: PropertyType;

  @Field(() => Boolean, { nullable: true })
  @Prop()
  isCertificate?: boolean;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);