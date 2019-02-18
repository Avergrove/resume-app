import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../models/interface/education';
import ModelFetcher from '../../utils/ModelFetcher';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() educations : Education[];

  constructor() {
    this.educations = ModelFetcher.getEducations();
   }

  ngOnInit() {
  }

}
