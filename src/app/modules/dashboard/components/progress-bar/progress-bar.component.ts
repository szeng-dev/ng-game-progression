import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  progressPercentage: string;

  @Input() progressPortion: number;
  @Input() totalPortion: number;
  @Input() backgroundColor: string;
  @Input() barColor: string;

  constructor() { }

  ngOnInit() {
    this.progressPercentage = Math.floor(this.progressPortion / this.totalPortion * 100) + '%';
  }

}
