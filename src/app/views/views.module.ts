import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponentComponent } from './statistics-component/statistics-component.component';
import { ViewsHomeComponent } from './views-home/views-home.component';

@NgModule({
  declarations: [StatisticsComponentComponent, ViewsHomeComponent],
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
})
export class ViewsModule {}
