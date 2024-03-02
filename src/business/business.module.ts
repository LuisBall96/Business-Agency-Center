import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessResolver } from './business.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Business, BusinessSchema } from './schema/business.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Business.name, schema: BusinessSchema }])],
  providers: [BusinessResolver, BusinessService],
})
export class BusinessModule {}
