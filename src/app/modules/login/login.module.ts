import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { LoginPageComponent } from './pages/login/login.page';

@NgModule({
  declarations: [LoginPageComponent],
  // keep importing FormsModule (ngModel) / ReactiveFormsModule (formControl) again if using lazy-loading
  imports: [LoginRoutingModule, CoreModule, SharedModule],
})
export class LoginModule {}
