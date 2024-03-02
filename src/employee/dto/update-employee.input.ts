import { IsArray, IsOptional, IsString } from 'class-validator';
import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @Field(() => String)
  @IsString()
  id: string;
}
