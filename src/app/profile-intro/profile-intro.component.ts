import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-intro',
  templateUrl: './profile-intro.component.html',
  styleUrls: ['./profile-intro.component.css']
})
export class ProfileIntroComponent implements OnInit {

  onProfileHover : boolean;

  constructor() { }

  ngOnInit() {
  }

  playProfileImageAnim(doPlay : boolean){
    this.onProfileHover = doPlay;
  }

}
