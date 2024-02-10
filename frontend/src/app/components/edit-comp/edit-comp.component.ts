import { Component, Input } from '@angular/core';
import { Compound } from '../../Compound';
import { Router } from '@angular/router';
import { CompService } from '../../services/comp.service';

@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrl: './edit-comp.component.css',
})
export class EditCompComponent {
  @Input() compound: Compound;

  newName: string;
  newDescription: string;
  newImgSrc: string;
  newImgAttr: string;

  constructor(private compService: CompService, private router: Router) {
    // initialize form values to current compound details.

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { data: any };

    if (state) {
      this.compound = state.data;

      this.newName = this.compound.CompoundName;
      this.newDescription = this.compound.CompoundDescription;
      this.newImgSrc = this.compound.strImageSource;
      this.newImgAttr = this.compound.strImageAttribution;
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  editCompound(compound: Compound) {
    this.compService.updateCompound(compound).subscribe(() => {
      alert('Compound updated successfully.');
      this.router.navigate(['/']);
    });
  }

  onSubmit() {
    if (!this.newName) {
      alert('Please add a Name!');
      return;
    }

    if (!this.newDescription) {
      alert('Please add a Description!');
      return;
    }

    if (!this.newImgSrc) {
      alert('Please add an Image Link!');
      return;
    }

    const newCompound: Compound = {
      id: this.compound.id,
      CompoundName: this.newName,
      CompoundDescription: this.newDescription,
      strImageSource: this.newImgSrc,
      strImageAttribution: this.newImgAttr,
      dateModified: this.formatDate(new Date()),
    };

    this.editCompound(newCompound);
  }
}
