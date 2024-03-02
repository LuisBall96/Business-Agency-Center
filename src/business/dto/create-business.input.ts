import { InputType, Int, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { BusinessType, PropertyType } from '../enum/business-types.enum';

@InputType()
export class CreateBusinessInput {

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  nic: string;

  @Field(() => BusinessType, { defaultValue: BusinessType.ProfitMotive  })
  @IsString()
  businessType: BusinessType;

  @Field(() => PropertyType, { defaultValue: PropertyType.Private  })
  @IsString()
  businessPropertyType: PropertyType;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isCertificate?: boolean;

}
