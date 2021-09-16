import { NgModule } from '@angular/core';

import { LoggerService } from './services/logger.service';

@NgModule({
  // for pipes, directives, and components (local scope)
  declarations: [],
  // for modules
  imports: [],
  // for services (public scope)
  providers: [LoggerService],
  exports: [],
})
export class CoreModule {}
