import { Component } from '@angular/core';
import { CompService } from '../../services/comp.service';
import { Compound } from '../../Compound';

@Component({
  selector: 'app-compounds',
  templateUrl: './compounds.component.html',
  styleUrl: './compounds.component.css',
})
export class CompoundsComponent {
  compounds: Compound[] = [];

  constructor(private compService: CompService) {}

  ngOnInit(): void {
    this.compService
      .getCompounds()
      .subscribe((compounds) => (this.compounds = compounds));
  }
}
