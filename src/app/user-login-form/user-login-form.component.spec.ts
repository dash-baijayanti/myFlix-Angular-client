import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoginFormComponent } from './user-login-form.component';

/**
 * @test
 * @name UserLoginFormComponent
 * @description
 * This test suite contains unit tests for the `UserLoginFormComponent`. It checks if the component is created successfully.
 */
describe('UserLoginFormComponent', () => {

  /**
   * @var {UserLoginFormComponent} component
   * @description
   * The instance of the `UserLoginFormComponent` that is tested in the suite.
   */
  let component: UserLoginFormComponent;

  /**
   * @var {ComponentFixture<UserLoginFormComponent>} fixture
   * @description
   * The Angular TestBed fixture that provides access to the component and its template.
   */
  let fixture: ComponentFixture<UserLoginFormComponent>;

  /**
   * @beforeEach
   * @description
   * Setup and initialization of the test environment before each test.
   * The TestBed is configured, and the component is created and initialized.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLoginFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @test
   * @name should create
   * @description
   * This test checks that the `UserLoginFormComponent` is created successfully.
   * If the component is created without errors, the test passes.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});