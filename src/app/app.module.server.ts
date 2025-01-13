import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [provideServerRoutesConfig(serverRoutes),
  provideClientHydration()
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
