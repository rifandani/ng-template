import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { LoginModule } from '@modules/login/login.module';
import { RegisterModule } from '@modules/register/register.module';
import { environment } from '@environment/environment';
import { reducers, metaReducers } from './store';

import { AppComponent } from './app.component';
import { HomePageComponent } from '@pages/home/home.page';
import { NotFoundPageComponent } from '@pages/not-found/not-found.page';

@NgModule({
  // for pipes, directives, and components
  declarations: [AppComponent, NotFoundPageComponent, HomePageComponent],
  // for modules
  imports: [
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    StoreRouterConnectingModule.forRoot(), // uses MinimalRouterStateSerializer by default
    BrowserAnimationsModule, // angular-material animations
    FlexLayoutModule, // angular/flex-layout
    BrowserModule, // this module already exports CommonModule, so we dont need to import CommonModule manually
    AppRoutingModule,
    CoreModule,
    LoginModule, // lazy-load, need to re-import FormsModule or SharedModule
    RegisterModule, // lazy-load, need to re-import FormsModule or SharedModule
  ],
  // for services (public scope)
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
