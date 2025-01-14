/**
 * @file app.component.spec.ts
 * @description Unit test for the `AppComponent` in the Angular application. This test suite validates the basic functionality of the `AppComponent`.
 * @module AppComponentSpec
 */

import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

/**
 * Test suite for the `AppComponent` class.
 * 
 * @description This suite contains tests that ensure the correct behavior of the `AppComponent` in terms of:
 * - Component creation
 * - Title initialization
 * - Correct rendering of title in the HTML
 * 
 * @class AppComponentSpec
 */
describe('AppComponent', () => {

  /** 
   * Setup and initialization for the tests.
   * 
   * @async
   * @function beforeEach
   * @returns {Promise<void>} A promise that resolves when the configuration is complete.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]) // Importing RouterModule to avoid errors due to routing in AppComponent
      ],
      declarations: [
        AppComponent // Declaring the component to be tested
      ],
    }).compileComponents(); // Compiling the component template and CSS
  });

  /**
   * Test to ensure that the AppComponent is created successfully.
   * 
   * @function it
   * @test It should create the app component.
   * @returns {void}
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Creating the component instance
    const app = fixture.componentInstance; // Accessing the component instance
    expect(app).toBeTruthy(); // Verifying the component instance is created successfully
  });

  /**
   * Test to check if the `Title` property of the AppComponent is initialized correctly.
   * 
   * @function it
   * @test It should have as title 'myFlix-Angular-client'.
   * @returns {void}
   */
  it(`should have as title 'myFlix-Angular-client'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Creating the component instance
    const app = fixture.componentInstance; // Accessing the component instance
    expect(app.Title).toEqual('myFlix-Angular-client'); // Verifying the title is correctly set
  });

  /**
   * Test to ensure that the title is rendered correctly in the component's template.
   * 
   * @function it
   * @test It should render title.
   * @returns {void}
   */
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Creating the component instance
    fixture.detectChanges(); // Triggering change detection to update the view
    const compiled = fixture.nativeElement as HTMLElement; // Accessing the rendered HTML element
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, myFlix-Angular-client'); // Verifying the title is displayed in the template
  });
});