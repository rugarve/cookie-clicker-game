import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);

    // Mock de localStorage
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === 'username') return 'Player1';
      if (key === 'playersState') return JSON.stringify({
        Player1: { points: 100, autoClickers: 2 }
      });
      return null;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save username to localStorage', () => {
    service.setUsername('Player1');
    expect(localStorage.setItem).toHaveBeenCalledWith('username', 'Player1');
  });

  it('should retrieve username from localStorage', () => {
    const username = service.getUsername();
    expect(username).toBe('Player1');
  });

  it('should retrieve player state from localStorage', () => {
    const state = service.getPlayerState('Player1');
    expect(state.points).toBe(100);
    expect(state.autoClickers).toBe(2);
  });

  it('should save player state to localStorage', () => {
    service.savePlayerState('Player1', { points: 150, autoClickers: 3 });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'playersState',
      JSON.stringify({
        Player1: { points: 150, autoClickers: 3 }
      })
    );
  });

  it('should remove username from localStorage on logout', () => {
    service.logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('username');
  });
});
