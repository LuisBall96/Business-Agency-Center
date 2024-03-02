import { registerEnumType } from "@nestjs/graphql";

export enum BusinessType {
    ProfitMotive = "profit motive",
    Nonprofit = "nonprofit", 
}

export enum PropertyType {
    Private = "Private",
    Public = "Public", 
}


registerEnumType(BusinessType,{name:'BusinessType'})

registerEnumType(PropertyType,{name:'PropertyType'})
