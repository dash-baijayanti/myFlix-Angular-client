/**
 * @file user-registration-form.component.spec.ts
 * @description This file contains unit tests for the `UserRegistrationFormComponent`.
 * The tests are written using Angular's testing framework to ensure the functionality of the component.
 * @module UserRegistrationFormComponent Tests
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationFormComponent } from './user-registration-form.component';

/**
 * @description
 * This test suite tests the functionality of the `UserRegistrationFormComponent`.
 * It ensures that the component is created correctly and that its basic functionality works as expected.
 */
describe('UserRegistrationFormComponent', () => {
  
  /**
   * @description
   * Declare variables for the component and fixture.
   * `component` holds the instance of the component.
   * `fixture` holds the test environment for the component.
   * @type {UserRegistrationFormComponent}
   * @type {ComponentFixture<UserRegistrationFormComponent>}
   */
  let component: UserRegistrationFormComponent;
  let fixture: ComponentFixture<UserRegistrationFormComponent>;

  /**
   * @description
   * This function is executed before each test case to configure the test environment.
   * It initializes the component and fixture, sets up the test module, and compiles the components.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistrationFormComponent] // Declare the component to be tested
    })
    .compileComponents(); // Compile the components to prepare them for testing

    fixture = TestBed.createComponent(UserRegistrationFormComponent); // Create the component fixture
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection to initialize the component
  });

  /**
   * @description
   * Test case to check if the component is successfully created.
   * Ensures the component is instantiated correctly and is truthy.
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component is truthy (i.e., it was created successfully)
  });
});