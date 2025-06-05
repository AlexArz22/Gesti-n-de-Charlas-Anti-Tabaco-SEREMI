import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';

import { MsalModule, MsalService, MsalGuard, MsalGuardConfiguration, MsalInterceptorConfiguration } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';

const msalInstance = new PublicClientApplication({
  auth: {
    clientId: 'f3d210fb-32ef-4500-b679-62da83d37a7e',
    authority: 'https://login.microsoftonline.com/5670779e-1677-4846-88b2-600761c13f2f',
    redirectUri: 'http://localhost:8100/'
  }
});

const guardConfig: MsalGuardConfiguration = {
  interactionType: InteractionType.Redirect,
  authRequest: {
    scopes: ['user.read']  // Ajusta los scopes según tu necesidad
  }
};

const interceptorConfig: MsalInterceptorConfiguration = {
  interactionType: InteractionType.Redirect,
  protectedResourceMap: new Map<string, Array<string>>([
    ['https://graph.microsoft.com/v1.0/me/messages', ['Mail.Read']] // Asegúrate de usar el scope adecuado para tu API
  ])
};




@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MsalModule.forRoot(msalInstance, guardConfig, interceptorConfig)
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [HeaderComponent]
})
export class AppModule {}