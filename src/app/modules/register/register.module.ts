import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPageComponent } from './pages/register/register.page';

@NgModule({
  declarations: [RegisterPageComponent],
  // keep importing FormsModule (ngModel) / ReactiveFormsModule (formControl) again if using lazy-loading
  imports: [RegisterRoutingModule, CoreModule, SharedModule],
})
export class RegisterModule {}
