import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared-module';
import { provideHttpClient } from '@angular/common/http';
import { ShopModule } from './shop/shop-module';
import { HomeComponent } from './home-component/home-component';
import { HomeModule } from './home-component/home-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ShopModule, HomeModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
