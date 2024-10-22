import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule, RouterTestingModule, NoopAnimationsModule],
      providers: [UserService],
    })
      .overrideComponent(HomeComponent, {
        set: {
          templateUrl: undefined,
          styleUrls: []
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should disable the start button if the username is empty', () => {
    const button = fixture.nativeElement.querySelector('button');
    component.username = '';
    fixture.detectChanges();
    expect(button.disabled).toBeTruthy();
  });

  it('should enable the start button if the username is not empty', () => {
    const button = fixture.nativeElement.querySelector('button');
    component.username = 'Player1';
    fixture.detectChanges();
    expect(button.disabled).toBeFalsy();
  });

  it('should call startGame when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    const spy = jest.spyOn(component, 'startGame');
    component.username = 'Player1';
    fixture.detectChanges();
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should navigate to /game after startGame is called', () => {
    const routerSpy = jest.spyOn(router, 'navigate');
    component.username = 'Player1';
    component.startGame();
    expect(routerSpy).toHaveBeenCalledWith(['/game']);
  });
});
