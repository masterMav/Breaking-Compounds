import { Component } from '@angular/core';
import { Compound } from '../../Compound';
import { CompService } from '../../services/comp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrl: './add-comp.component.css',
})
export class AddCompComponent {
  id: number;
  CompoundName: string;
  CompoundDescription: string;
  strImageSource: string;
  strImageAttribution: string;
  dateModified: string;

  constructor(private compService: CompService, private router: Router) {}

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  addCompound(compound: Compound) {
    this.compService.addCompound(compound).subscribe((compound) => {
      alert('New compound created successfully.');
      this.router.navigate(['/']);
    });
  }

  onSubmit() {
    if (!this.CompoundName) {
      alert('Please add a Name!');
      return;
    }

    if (!this.CompoundDescription) {
      alert('Please add a Description!');
      return;
    }

    if (!this.strImageSource) {
      alert('Please add an Image Link!');
      return;
    }

    this.dateModified = this.formatDate(new Date());

    const newCompound: Compound = {
      id: this.id,
      CompoundName: this.CompoundName,
      CompoundDescription: this.CompoundDescription,
      strImageSource: this.strImageSource,
      strImageAttribution: this.strImageAttribution,
      dateModified: this.dateModified,
    };

    this.addCompound(newCompound);

    this.CompoundName = '';
    this.CompoundDescription = '';
    this.strImageSource = '';
    this.strImageAttribution = '';
  }
}
