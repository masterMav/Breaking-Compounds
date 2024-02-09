import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompService } from '../../services/comp.service';
import { Compound } from '../../Compound';

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
    private compService: CompService
  ) {}

  ngOnInit(): void {
    this.compoundID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.compService
      .getCompoundById(this.compoundID)
      .subscribe((compound) => (this.compound = compound));
  }
}
