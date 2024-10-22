import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { GameService } from '../../services/game/game.service';
import { UserService } from '../../services/user/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameService: GameService;
  let userService: UserService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [RouterTestingModule, NoopAnimationsModule],
      providers: [GameService, UserService],
    })
      .overrideComponent(GameComponent, {
        set: {
          templateUrl: undefined,
          styleUrls: []
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(GameService);
    userService = TestBed.inject(UserService);

    jest.spyOn(userService, 'getUsername').mockReturnValue('Player1');
    jest.spyOn(userService, 'getPlayerState').mockReturnValue({
      points: 0,
      autoClickers: 0,
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase points when clicking "Generate Points" button', () => {
    component.points = 0;
    const initialPoints = component.points;

    component.addPoint();
    expect(component.points).toBe(initialPoints + 1);
  });

  it('should display auto-clicker button when points reach 50', () => {
    component.points = 50;
    fixture.detectChanges();

    const autoClickerButton = fixture.nativeElement.querySelector('.auto-clicker-btn');
    expect(autoClickerButton.disabled).toBeFalsy();
  });

  it('should allow buying an auto-clicker at 50 points and update the cost correctly', () => {
    component.points = 50;
    component.autoClickers = 0;

    component.buyAutoClicker();

    expect(component.autoClickers).toBe(1);
    expect(component.points).toBe(0);
    expect(component.autoClickerCost).toBe(100);
  });

  it('should allow buying a second auto-clicker at 100 points and update the cost correctly', () => {
    component.points = 100;
    component.autoClickers = 1;

    component.buyAutoClicker();

    expect(component.autoClickers).toBe(2);
    expect(component.points).toBe(0);
    expect(component.autoClickerCost).toBe(150);
  });

  it('should generate points automatically based on the auto-clicker', (done) => {
    component.autoClickers = 1;
    component.points = 0;

    fixture.detectChanges();
    component.startAutoClickerPoints(50);

    setTimeout(() => {
      expect(component.points).toBeGreaterThanOrEqual(50);
      done();
    }, 1200);
  });

  it('should stop generating points once the cost of auto-clicker is reached', (done) => {
    component.autoClickers = 1;
    component.points = 0;

    fixture.detectChanges();
    component.startAutoClickerPoints(50);

    setTimeout(() => {
      expect(component.autoClickersRunning).toBe(0);
      done();
    }, 1200);
  });
});