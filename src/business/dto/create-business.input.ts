import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateBusinessInput {

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  nic: string;
}
