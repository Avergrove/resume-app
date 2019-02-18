import { EducationalInstitution } from './educational-institution';

export class Education{
    institution : EducationalInstitution;
    qualification: String;
    description: String;

    constructor(institution : EducationalInstitution, qualification : String, description : String){
        this.institution = institution;
        this.qualification = qualification;
        this.description = description;
    }
}