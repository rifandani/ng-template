import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { LoginModule } from '@modules/login/login.module';
import { RegisterModule } from '@modules/register/register.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from '@pages/home/home.page';
import { NotFoundPageComponent } from '@pages/not-found/not-found.page';

@NgModule({
  // for pipes, directives, and components
  declarations: [AppComponent, NotFoundPageComponent, HomePageComponent],
  // for modules
  imports: [
    BrowserModule, // this module already exports CommonModule, so we dont need to import CommonModule manually
    AppRoutingModule,
    CoreModule,
    SharedModule,
    LoginModule, // lazy-load, need to re-import FormsModule or SharedModule
    RegisterModule, // lazy-load, need to re-import FormsModule or SharedModule
  ],
  // for services (public scope)
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
