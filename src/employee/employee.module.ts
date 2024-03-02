import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schema/employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])],
  providers: [EmployeeResolver, EmployeeService],
})
export class EmployeeModule {}
