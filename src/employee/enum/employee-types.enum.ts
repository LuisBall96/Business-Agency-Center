import { registerEnumType } from "@nestjs/graphql";

export enum EmployeeTypes {
    Backend = "Backend",
    Frontend = "Frontend",
    QA = "QA" 
}


registerEnumType(EmployeeTypes,{name:'EmployeeTypes'})
