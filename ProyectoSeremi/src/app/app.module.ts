import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [HeaderComponent]
})
export class AppModule {}