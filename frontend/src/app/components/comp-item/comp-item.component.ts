import { Component, Input } from '@angular/core';
import { Compound } from '../../Compound';

@Component({
  selector: 'app-comp-item',
  templateUrl: './comp-item.component.html',
  styleUrl: './comp-item.component.css',
})
export class CompItemComponent {
  @Input() compound: Compound;
}
