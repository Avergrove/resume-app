import { Component, OnInit, Input } from '@angular/core';
import { Certification } from '../../models/interface/certification';
import ModelFetcher from '../../utils/ModelFetcher';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  @Input() certifications : Certification[];

  constructor() { 
    this.certifications = ModelFetcher.getCertifications();
  }

  ngOnInit() {
  }

}
