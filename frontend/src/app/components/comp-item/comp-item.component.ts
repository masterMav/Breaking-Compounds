import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Compound } from '../../Compound';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comp-item',
  templateUrl: './comp-item.component.html',
  styleUrl: './comp-item.component.css',
})
export class CompItemComponent {
  @Input() compound: Compound;
  @Output() onDeleteCompound: EventEmitter<Compound> = new EventEmitter();

  faTimes = faTimes;

  onDelete(event: any, compound: Compound) {
    event.stopPropagation();
    this.onDeleteCompound.emit(compound);
  }
}
