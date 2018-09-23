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
  profileImage: string;
  profileName: string;

  constructor() { }

  ngOnInit() {
    this.profile.subscribe(
      data => {
        this.profileImage = data.image;
        this.profileName = `${data.firstName} ${data.lastName}`;
      }
    );
  }
}
