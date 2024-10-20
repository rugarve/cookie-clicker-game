import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingComponent } from './ranking.component';
import { UserService } from 'src/app/services/user/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('RankingComponent', () => {
  let component: RankingComponent;
  let fixture: ComponentFixture<RankingComponent>;
  let userService: UserService;
  let getRankingSpy: jest.SpyInstance;

  const mockRanking = [
    { username: 'Player1', score: 200 },
    { username: 'Player2', score: 150 },
    { username: 'Player3', score: 100 },
  ];

  beforeEach(async () => {
    const userServiceMock = {
      getRanking: jest.fn().mockReturnValue(mockRanking),
    };

    await TestBed.configureTestingModule({
      declarations: [RankingComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: UserService, useValue: userServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(RankingComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    getRankingSpy = jest.spyOn(userService, 'getRanking');
    fixture.detectChanges(); // Ejecutamos ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRanking on UserService when initialized', () => {
    expect(getRankingSpy).toHaveBeenCalled();
  });

  it('should display the ranking sorted by score in descending order', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);

    // Verificamos que los jugadores están ordenados correctamente por puntaje
    expect(rows[0].nativeElement.textContent).toContain('Player1');
    expect(rows[1].nativeElement.textContent).toContain('Player2');
    expect(rows[2].nativeElement.textContent).toContain('Player3');
  });

  it('should render the correct score for each player', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    expect(rows[0].nativeElement.textContent).toContain('200');
    expect(rows[1].nativeElement.textContent).toContain('150');
    expect(rows[2].nativeElement.textContent).toContain('100');
  });

  it('should navigate back to the game when the back button is clicked', () => {
    const router = TestBed.inject(Router); // Inyectamos el Router
    const routerSpy = jest.spyOn(router, 'navigate'); // Espiamos el método navigate del Router
    const backButton = fixture.debugElement.query(By.css('.back-btn'));

    backButton.nativeElement.click();
    expect(routerSpy).toHaveBeenCalledWith(['/game']); // Verificamos que navega a la ruta "/game"
  });
});