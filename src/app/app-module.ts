import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared-module';
import { provideHttpClient ,withInterceptors } from '@angular/common/http';
import { ShopModule } from './shop/shop-module';
import { HomeComponent } from './home-component/home-component';
import { HomeModule } from './home-component/home-module';
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from './core/interceptor/loader-interceptor';


@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HomeModule,NgxSpinnerModule],
  providers:
   [provideBrowserGlobalErrorListeners(),
     provideClientHydration(), 
     provideHttpClient(
          withInterceptors([loadingInterceptor])

     )
     
    ],

  bootstrap: [App],
})
export class AppModule {}
