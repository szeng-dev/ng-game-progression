import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../types/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() profile: Profile;

  constructor() { }

  ngOnInit() {
  }
}
