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
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: number[] = [5, 10, 15, 20];

  constructor(private compService: CompService) {}

  ngOnInit(): void {
    this.getList();
  }

  deleteCompound(compound: Compound) {
    this.compService.deleteCompound(Number(compound.id)).subscribe(() => {
      this.compounds = this.compounds.filter((c) => c.id !== compound.id);
    });
  }

  getList(): void {
    this.compService
      .getCompounds()
      .subscribe((compounds) => (this.compounds = compounds));
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getList();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getList();
  }
}
