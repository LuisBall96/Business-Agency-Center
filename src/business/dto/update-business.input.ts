import { IsString } from 'class-validator';
import { CreateBusinessInput } from './create-business.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';


@InputType()
export class UpdateBusinessInput extends PartialType(CreateBusinessInput) {
  @Field(() => ID)
  @IsString()
  id: string;
}
