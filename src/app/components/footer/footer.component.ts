import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../../types/language.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() languages: Language[]

  constructor() { }

  ngOnInit() {
  }

}
