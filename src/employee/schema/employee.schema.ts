import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { Business } from 'src/business/schema/business.schema';
import { EmployeeTypes } from '../enum/employee-types.enum';

export type BusinessDocument = HydratedDocument<Employee>;

@ObjectType()
@Schema()
export class Employee {

  @Field(() => ID)
  get id(): Types.ObjectId {
    return this.id
  }

  @Field(() => String)
  @Prop()
  employeeName: string;

  @Field(() => EmployeeTypes)
  @Prop({ default: EmployeeTypes.Backend })
  employeeType: EmployeeTypes
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);