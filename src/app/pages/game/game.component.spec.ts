import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { GameService } from 'src/app/services/game/game.service';
import { UserService } from 'src/app/services/user/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameService: GameService;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [RouterTestingModule],
      providers: [GameService, UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(GameService);
    userService = TestBed.inject(UserService);

    jest.spyOn(userService, 'getUsername').mockReturnValue('Player1');
    jest.spyOn(userService, 'getPlayerState').mockReturnValue({
      points: 0,
      autoClickers: 0,
    });

    fixture.detectChanges(); // Llamamos a ngOnInit
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
    expect(autoClickerButton.disabled).toBeFalsy(); // El botón debe estar habilitado cuando los puntos son >= 50
  });

  it('should allow buying an auto-clicker at 50 points and update the cost correctly', () => {
    component.points = 50;
    component.autoClickers = 0;

    component.buyAutoClicker();

    expect(component.autoClickers).toBe(1); // Se ha comprado el primer AutoClicker
    expect(component.points).toBe(0); // Se han restado los 50 puntos
    expect(component.autoClickerCost).toBe(100); // El siguiente AutoClicker debe costar 100 puntos
  });

  it('should allow buying a second auto-clicker at 100 points and update the cost correctly', () => {
    component.points = 100;
    component.autoClickers = 1;

    component.buyAutoClicker();

    expect(component.autoClickers).toBe(2); // Se ha comprado el segundo AutoClicker
    expect(component.points).toBe(0); // Se han restado los 100 puntos
    expect(component.autoClickerCost).toBe(150); // El siguiente AutoClicker debe costar 150 puntos
  });

  it('should generate points automatically based on the auto-clicker cost', (done) => {
    component.autoClickers = 1;
    component.points = 0;

    fixture.detectChanges();
    component.startAutoClickerPoints(50); // El primer auto-clicker debe generar hasta 50 puntos

    setTimeout(() => {
      expect(component.points).toBeGreaterThanOrEqual(50); // El auto-clicker genera al menos 50 puntos
      done();
    }, 1200); // Esperamos tiempo suficiente para que se generen los puntos
  });

  it('should stop generating points once the cost of auto-clicker is reached', (done) => {
    component.autoClickers = 1;
    component.points = 0;

    fixture.detectChanges();
    component.startAutoClickerPoints(50); // El primer auto-clicker debe generar hasta 50 puntos

    setTimeout(() => {
      expect(component.autoClickersRunning).toBe(0); // El intervalo debe detenerse después de generar los puntos
      done();
    }, 1200); // Esperamos lo suficiente para que se detenga el intervalo
  });
});