import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schema/employee.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<Employee>) {}

  async create(createEmployeeInput: CreateEmployeeInput): Promise <Employee> {
     const createdEmployee = new this.employeeModel(createEmployeeInput);
    return createdEmployee.save();
  }

  findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findOne(id: string) : Promise <Employee> {
    const oneEmployee = await this.employeeModel.findById(id).exec();

    if (!oneEmployee) throw new NotFoundException(`Employee with ID ${id} not found`);

    return oneEmployee;
  }

  async update(id: string, updateEmployeeInput: UpdateEmployeeInput) : Promise <Employee> {
    const updateEmployee = await this.employeeModel.findByIdAndUpdate(id, updateEmployeeInput).exec();
    
    if (!updateEmployee) throw new NotFoundException(`Employee with ID ${id} not found`);

    return updateEmployee
  }

  async remove(id: string) : Promise <Employee> {
    const deleteEmployee = await this.employeeModel.findByIdAndDelete(id)
    
    if (!deleteEmployee) throw new NotFoundException(`Employee with ID ${id} not found`);

    return deleteEmployee
  }
}
