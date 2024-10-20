import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);

    // Mock de localStorage para que no interfiera con el entorno de pruebas
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify({
      Player1: { points: 100, autoClickers: 2 }
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update points for a player', () => {
    service.updatePoints('Player1', 200);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'playersState',
      JSON.stringify({ Player1: { points: 200, autoClickers: 2 } })
    );
  });

  it('should update auto-clickers for a player', () => {
    service.updateAutoClickers('Player1', 3);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'playersState',
      JSON.stringify({ Player1: { points: 100, autoClickers: 3 } })
    );
  });

  it('should retrieve player state from localStorage', () => {
    const state = service.getPlayerState('Player1');
    expect(state.points).toBe(100);
    expect(state.autoClickers).toBe(2);
  });

  it('should return default state if player is not found', () => {
    const state = service.getPlayerState('Player2');
    expect(state.points).toBe(0);
    expect(state.autoClickers).toBe(0);
  });
});
