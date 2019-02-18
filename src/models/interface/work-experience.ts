import { Company } from './company';

export class WorkExperience{
    company: Company;
    role : string;
    description : string;

    constructor(company : Company, role : string, description : string){
        this.company = company;
        this.role = role;
        this.description = description;
    }
}