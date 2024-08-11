import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Star as StarDTO } from './rating-star.types';
import { environment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class RatingStarComponent implements OnInit {
  @Input() maxValue = 5;
  @Input() value = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  full: string = `${environment.assestsIcons}/svg/star-full.svg`;
  empty: string = `${environment.assestsIcons}/svg/star-empty.svg`;
  stars: StarDTO[] = [];
  @Input() readonly = false;

  constructor() {}

  ngOnInit() {
    this.initStars();
    this.setValuesInit();
  }

  initStars() {
    this.stars = [];
    for (let i = 0; i < this.maxValue; i++) {
      this.stars.push({
        isSelected: false,
        path: this.empty,
        position: i,
      });
    }
  }

  setValuesInit() {
    for (let i = 0; i < this.value; i++) {
      this.stars[i].path = this.full;
      this.stars[i].isSelected = true;
    }
  }

  setValue(position: number) {
    if (this.readonly) return;
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].path = i <= position ? this.full : this.empty;
    }
    this.valueChange.emit(position + 1);
  }
}
