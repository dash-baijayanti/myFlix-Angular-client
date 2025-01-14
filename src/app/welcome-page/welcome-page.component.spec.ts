/**
 * @file welcome-page.component.spec.ts
 * @description This is the test suite for `WelcomePageComponent`. It contains unit tests to verify the correct behavior of the component.
 * @module WelcomePageComponentSpec
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomePageComponent } from './welcome-page.component';

/**
 * @description
 * The test suite for `WelcomePageComponent` verifies that the component behaves as expected.
 * It contains a simple test to check if the component is created successfully.
 */
describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  /**
   * @method beforeEach
   * @description
   * This function is called before each test case. It configures the testing module and creates the component instance.
   * It also triggers change detection for the component.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomePageComponent] // Declare the component to be tested
    })
    .compileComponents(); // Compile the component

    fixture = TestBed.createComponent(WelcomePageComponent); // Create a fixture of the component
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection to ensure the component is initialized
  });

  /**
   * @method it('should create')
   * @description
   * This is the test case that verifies if the `WelcomePageComponent` is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component instance is truthy (i.e., it has been created)
  });
});