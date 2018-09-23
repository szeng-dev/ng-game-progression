import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../types/profile.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() profile: Observable<Profile>;
  profileImage: string = "#9dafbd";
  profileName: string = "#9dafbd";

  constructor() { }

  ngOnInit() {
    this.profile.subscribe(
      profile => {
        this.profileImage = profile.image;
        this.profileName = `${profile.firstName} ${profile.lastName}`;
      }
    );
  }
}
