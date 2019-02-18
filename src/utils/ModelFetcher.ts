import { Company } from "../models/interface/company";
import { WorkExperience } from "../models/interface/work-experience";
import { Education } from "../models/interface/education";
import { EducationalInstitution } from "../models/interface/educational-institution";
import { Certification } from "../models/interface/certification";
import { ProjectExperience } from "../models/interface/project-experience";

export default class ModelFetcher {
  static getWorkExperiences() {
    let workExperiences: WorkExperience[] = [];

    let ncs = new Company("assets/images/ncs.png", "NCS");
    let ncsExperience = new WorkExperience(
      ncs,
      "Software Engineer Intern",
      "• Created a module an educational institution’s software system by utilizing good practices such as code reuse, clear commenting, and use of design patterns. \n" +
        "• Rapidly learnt and understood Android development architecture throughout the internship, while implementing a suite of modules for the educational institution’s Android application. \n" +
        "• By using API methods, the Android application was able to fluidly handle data from the application server and display to the user in a captivating screen. \n" +
        "• Proper coding practices such as Designing by Contract, utilization of Polymorphism strategy, and good commenting were used to ensure that other developers will be able to easily understand and make changes to the application in the future."
    );

    let msig = new Company("assets/images/msig.jpg", "MSIG");
    let msigExperience = new WorkExperience(
      msig,
      "Intern",
      "• Performed thorough analysis on MSIG Malaysia’s website’s user interface design with recommendations given in the form of a presentation. Issues and solutions were highlighted, applying Human Computer Interaction best practices knowledge obtained from my Bachelors \n" +
        "• Conducted research on Chatbots for supervisor to enable implementation of cost re" +
        "• Gained exposure to the MSIG’s Software Development Life Cycle"
    );

    workExperiences.push(ncsExperience);
    workExperiences.push(msigExperience);

    return workExperiences;
  }

  /**
   * Returns a list of Educations
   */
  static getEducations() {
    let educations: Education[] = [];

    let unsw = new EducationalInstitution(
      "assets/images/unsw.png",
      "University of New South Wales"
    );
    let unswEducation = new Education(
      unsw,
      "Bachelor in Computer Science",
      "This super flexible degree is concerned with the core principles and technologies that make up the entire range of computer-based systems. It studies the principles underlying computer hardware, algorithms, operating systems, networks, databases, graphics and artificial intelligence, and also the practice of building these systems. This degree sits within Engineering because of its relationship with Electrical Engineering and robotics."
    );

    educations.push(unswEducation);

    let nus = new EducationalInstitution(
      "assets/images/nus-iss.jpg",
      "National University of Singapore (Institute of System Science)"
    );
    let nusEducation = new Education(
      nus,
      "Graduate Diploma in System Analysis",

      "The Graduate Diploma in Systems Analysis programme (GDipSA) is designed for non-IT graduates intending to craft a new career path in the IT industry. IT graduates and professionals who wish to advance their careers in their current field and recognise the need to equip themselves with the latest IT knowledge and skills to stay relevant may apply as well. \n"
    );

    educations.push(nusEducation);

    return educations;
  }

  static getCertifications() {
    let certifications: Certification[] = [];

    let amc = new Certification(
      "Australian Math Competition (Distinction)",
      "2012, 2013"
    );

    certifications.push(amc);

    return certifications;
  }

  static getProjectExperiences() {
    let experiences: ProjectExperience[] = [];

    let aiRpg = new ProjectExperience(
      "AI Rpg",
      "Created an Artificial Intelligence that will play a command-line based RPG, which involves exploration of an area, and using its knowledge of the surrounding, utilizes tools to complete the stage. The program was able to reliaby complete each stage with ease."
    );
    experiences.push(aiRpg);

    let resumeApp = new ProjectExperience(
      "Resume Application",
      "The resume application is a website written on Angular. It is published on Github Pages, and allows people to easily view the user's basic information anytime, anywhere, online! The application was also written modularly and concisely to ensure that making changes to the application is a snap!"
    );
    experiences.push(resumeApp);

    return experiences;
  }
}
