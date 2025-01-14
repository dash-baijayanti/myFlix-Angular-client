import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';

/**
 * @test
 * @name UserProfileComponent
 * @description
 * This test suite contains unit tests for the `UserProfileComponent`. 
 * It verifies that the component can be successfully created and checks its initial state.
 */
describe('UserProfileComponent', () => {
  
  /**
   * @description
   * A fixture is created for the `UserProfileComponent` in each test.
   * The fixture provides access to the component instance and its DOM elements.
   */
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  /**
   * @beforeEach
   * This function runs before each test, configuring the testing module and setting up the component.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent]  // Declare the component to be tested
    })
    .compileComponents();  // Compile the component's template and styles

    fixture = TestBed.createComponent(UserProfileComponent);  // Create the component fixture
    component = fixture.componentInstance;  // Get the component instance from the fixture
    fixture.detectChanges();  // Trigger change detection to update the component's view
  });

  /**
   * @test
   * @description
   * This test verifies that the `UserProfileComponent` is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();  // Assert that the component instance is truthy (i.e., created successfully)
  });
});