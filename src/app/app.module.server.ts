/**
 * @file app.server.module.ts
 * @description The server-side module of the Angular application for Angular Universal (SSR) setup.
 * It extends the main application module to include server-specific functionality.
 * @module AppServerModule
 */

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';

/**
 * The module for server-side rendering (SSR) of the Angular application.
 * 
 * @class AppServerModule
 * @description Extends the `AppModule` to support server-side rendering by including server-specific providers
 * and configurations. It configures Angular Universal and sets up client hydration.
 */
@NgModule({
  imports: [
    AppModule, // The main application module.
    ServerModule // Angular's server-side rendering module.
  ],
  providers: [
    /**
     * Configures server-specific routes for the application.
     * 
     * @function provideServerRoutesConfig
     * @param {ServerRoute[]} serverRoutes - The server routes configuration.
     */
    provideServerRoutesConfig(serverRoutes),

    /**
     * Enables client hydration to sync the server-rendered application with the browser.
     * 
     * @function provideClientHydration
     */
    provideClientHydration()
  ],
  bootstrap: [
    AppComponent // The root component to bootstrap the application.
  ],
})
export class AppServerModule {}