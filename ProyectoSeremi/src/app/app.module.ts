import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SideBarComponent, AppLayoutComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, SideBarComponent, AppLayoutComponent]
})
export class AppModule {}
