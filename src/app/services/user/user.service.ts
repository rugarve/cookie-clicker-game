import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private username: string = '';
  private rankingKey = 'playersState';
  
  setUsername(username: string): void {
    this.username = username;
    localStorage.setItem('username', username);
  }

  getUsername(): string {
    return localStorage.getItem('username') || '';
  }

  getPlayerState(username: string): any {
    const playersState = localStorage.getItem('playersState');
    if (playersState) {
      const state = JSON.parse(playersState);
      return state[username] || null;
    }
    return null;
  }

  savePlayerState(username: string, state: any): void {
    const playersState = JSON.parse(localStorage.getItem('playersState') || '{}');
    playersState[username] = state;
    localStorage.setItem('playersState', JSON.stringify(playersState));
  }

  logout(): void {
    localStorage.removeItem('username');
  }

  getRanking(): { username: string; score: number }[] {
    const playersState = localStorage.getItem(this.rankingKey);
    if (playersState) {
      const players = JSON.parse(playersState);
      return Object.keys(players).map(username => ({
        username,
        score: players[username].points
      })).sort((a, b) => b.score - a.score); // Ordena el ranking por puntos
    }
    return [];
  }
}
