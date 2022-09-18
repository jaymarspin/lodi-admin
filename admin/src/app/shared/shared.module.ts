import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { TopHeadComponent } from './components/top-head/top-head.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, TopHeadComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule]
})
export class SharedModule {}
