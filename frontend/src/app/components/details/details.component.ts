import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompService } from '../../services/comp.service';
import { Compound } from '../../Compound';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  compoundID: Number;
  compound: Compound;

  constructor(
    private activatedRoute: ActivatedRoute,
    private compService: CompService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.compoundID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.compService
      .getCompoundById(this.compoundID)
      .subscribe((compound) => (this.compound = compound));
  }

  formatTimeAgo(dateModified: string): string {
    const currentDate = new Date();
    const modifiedDate = new Date(dateModified);
    const differenceInSeconds = Math.floor(
      (currentDate.getTime() - modifiedDate.getTime()) / 1000
    );

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} second${
        differenceInSeconds > 1 ? 's' : ''
      } ago`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (differenceInSeconds < 2592000) {
      // 30 days (approximately a month)
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (differenceInSeconds < 31536000) {
      // 365 days (approximately a year)
      const months = Math.floor(differenceInSeconds / 2592000);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(differenceInSeconds / 31536000);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  }

  getFormattedTimeAgo(): string {
    return this.formatTimeAgo(this.compound.dateModified.toString());
  }
}
