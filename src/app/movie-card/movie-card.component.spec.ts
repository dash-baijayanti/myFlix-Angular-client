import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardComponent } from './movie-card.component';

/**
 * @describe
 * Unit tests for the `MovieCardComponent`. This suite tests the basic functionality of the component
 * to ensure that it is created correctly and behaves as expected.
 */
describe('MovieCardComponent', () => {

  /**
   * @var {MovieCardComponent} component
   * @description
   * Holds the instance of the `MovieCardComponent` being tested.
   */
  let component: MovieCardComponent;

  /**
   * @var {ComponentFixture<MovieCardComponent>} fixture
   * @description
   * Holds the fixture for creating and interacting with the component in the test environment.
   */
  let fixture: ComponentFixture<MovieCardComponent>;

  /**
   * @beforeEach
   * @description
   * Configures the testing module, compiles the component, and creates the component instance
   * before each test is run.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent] // Declares the component to be tested
    })
      .compileComponents(); // Compiles the components

    fixture = TestBed.createComponent(MovieCardComponent); // Creates the component instance
    component = fixture.componentInstance; // Assigns the component instance to the variable
    fixture.detectChanges(); // Triggers change detection for the component
  });

  /**
   * @it
   * @description
   * Tests if the `MovieCardComponent` instance is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifies the component is created successfully
  });
});