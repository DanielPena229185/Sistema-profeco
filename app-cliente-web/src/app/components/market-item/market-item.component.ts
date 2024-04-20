import { Component, Input } from '@angular/core';
import { ActionOption, MarketOption } from './market-item.types';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MarketReportFormComponent } from '../market-report-form/market-report-form.component';

@Component({
  selector: 'app-market-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-item.component.html',
  styleUrl: './market-item.component.css',
})
export class MarketItemComponent {

  @Input() id: string;

  marketOptions: MarketOption[] = [
    {
      actionOption: ActionOption.REPORT,
      title: 'Reportar',
      color: 'red',
    },
    {
      actionOption: ActionOption.ADDWISHLIST,
      title: 'Agregar a la lista de deseos',
      color: 'blue',
    },
  ];

  constructor(private readonly dialog: MatDialog) {}

  goToReportMarket() {
    this.dialog.open(MarketReportFormComponent, {
      data: this.id,
    });
  }

  onAction(action: ActionOption) {
    switch (action) {
      case ActionOption.REPORT:
        this.goToReportMarket();
        break;
      case ActionOption.ADDWISHLIST:
        console.log('Agregar a la lista de deseos');
        break;
    }
  }
}
