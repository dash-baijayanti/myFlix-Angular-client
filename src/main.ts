/**
 * Entry point for the Angular application.
 * This file bootstraps the application module.
 * 
 * @fileoverview Angular application main entry point for bootstrapping the root module.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/**
 * Bootstraps the Angular application with the root module `AppModule`.
 * Enables event coalescing for optimizing Angular's change detection.
 * 
 * @function
 * @name bootstrapApplication
 * @returns {void} Does not return anything.
 */
platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true, // Enables event coalescing for better performance.
  })
  .catch(err => {
    /**
     * Logs any errors that occur during the bootstrap process.
     * @param {Error} err - The error object.
     */
    console.error(err);
  });