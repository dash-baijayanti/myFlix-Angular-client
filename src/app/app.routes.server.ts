/**
 * @file server-routes.ts
 * @description Defines the server-side rendering (SSR) routes and their render modes for the Angular application.
 * @module ServerRoutes
 */

import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * An array of server-side rendering routes with their respective render modes.
 * 
 * @constant {ServerRoute[]} serverRoutes
 * @property {string} path - The URL path for which the render mode is configured.
 * @property {RenderMode} renderMode - The render mode to be used for the given path. Possible values include:
 * - `RenderMode.Prerender`: Indicates that the route should be pre-rendered during the build process.
 * - `RenderMode.SSR`: Indicates that the route should be rendered dynamically on the server.
 */
export const serverRoutes: ServerRoute[] = [
  {
    /**
     * The root path ('') is configured to use pre-rendering.
     */
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    /**
     * The wildcard path ('**') is configured to use pre-rendering.
     * This handles all paths that are not explicitly defined elsewhere.
     */
    path: '**',
    renderMode: RenderMode.Prerender
  }
];