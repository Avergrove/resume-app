import { Component, OnInit, Input } from "@angular/core";
import { WorkExperience } from "src/models/interface/work-experience";
import ModelFetcher from "src/utils/ModelFetcher";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.css"]
})
export class WorkExperienceComponent implements OnInit {

  @Input() workExperiences: WorkExperience[];

  constructor() {
    this.workExperiences = ModelFetcher.getWorkExperiences();
  }

  ngOnInit() {}
}
