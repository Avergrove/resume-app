import { Component, OnInit, Input } from '@angular/core';
import { ProjectExperience } from '../../models/interface/project-experience';
import ModelFetcher from '../../utils/ModelFetcher';

@Component({
  selector: 'app-project-highlights',
  templateUrl: './project-highlights.component.html',
  styleUrls: ['./project-highlights.component.css']
})
export class ProjectHighlightsComponent implements OnInit {

  @Input() experiences : ProjectExperience[];

  constructor() { 
    this.experiences = ModelFetcher.getProjectExperiences();
  }

  ngOnInit() {
  }

}
