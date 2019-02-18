import { Component, OnInit, Input } from "@angular/core";
import { WorkExperience } from "src/models/interface/work-experience";
import { Company } from "src/models/interface/company";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.css"]
})
export class WorkExperienceComponent implements OnInit {
  @Input() workExperiences: WorkExperience[] = [];

  constructor() {
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
      msig, "Intern", 
      "• Performed thorough analysis on MSIG Malaysia’s website’s user interface design with recommendations given in the form of a presentation. Issues and solutions were highlighted, applying Human Computer Interaction best practices knowledge obtained from my Bachelors \n"+
      "• Conducted research on Chatbots for supervisor to enable implementation of cost re" +
      "• Gained exposure to the MSIG’s Software Development Life Cycle"
    )

    this.workExperiences.push(ncsExperience);
    this.workExperiences.push(msigExperience);
  }

  ngOnInit() {}
}
