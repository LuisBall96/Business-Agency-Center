import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { EmployeeTypes } from '../enum/employee-types.enum';

@InputType()
export class CreateEmployeeInput {
  @Field(() => String)
  @IsString()
  employeeName: string;

  @Field(() => EmployeeTypes)
  @IsString()
  employeeType: EmployeeTypes;
}
