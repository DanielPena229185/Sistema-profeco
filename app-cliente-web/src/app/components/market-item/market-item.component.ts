import { Component, Input } from '@angular/core';
import { ActionOption, MarketDTO, MarketOption } from './market-item.types';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MarketReportFormComponent } from '../market-report-form/market-report-form.component';
import { MarketReviewComponent } from '../market-review/market-review.component';

@Component({
  selector: 'app-market-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-item.component.html',
  styleUrl: './market-item.component.css',
})
export class MarketItemComponent {
  @Input() market: MarketDTO;

  marketOptions: MarketOption[] = [
    {
      actionOption: ActionOption.REPORT,
      title: 'Reportar',
    },
    {
      actionOption: ActionOption.ADDWISHLIST,
      title: 'Agregar a la lista de deseos',
    },
    {
      actionOption: ActionOption.ADDREVIEW,
      title: 'Calificar',
    },
  ];

  constructor(private readonly dialog: MatDialog) {}

  goToReportMarket() {
    this.dialog.open(MarketReportFormComponent, {
      data: this.market.id,
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
      case ActionOption.ADDREVIEW:
        this.openReviewMarket(this.market.id);
        break;
    }
  }

  openReviewMarket(marketId: string) {
    this.dialog.open(MarketReviewComponent, {
      data: marketId,
    });
  }
}
