import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private playersState: any = {};

  updatePoints(username: string, points: number): void {
    const player = this.getPlayerState(username);
    player.points = points;
    this.savePlayerState(username, player);
  }

  updateAutoClickers(username: string, autoClickers: number): void {
    const player = this.getPlayerState(username);
    player.autoClickers = autoClickers;
    this.savePlayerState(username, player);
  }

  getPlayerState(username: string) {
    return this.playersState[username] || { points: 0, autoClickers: 0 };
  }

  savePlayerState(username: string, state: any) {
    this.playersState[username] = state;
    localStorage.setItem('playersState', JSON.stringify(this.playersState));
  }

  loadStateFromStorage() {
    const savedState = localStorage.getItem('playersState');
    if (savedState) {
      this.playersState = JSON.parse(savedState);
    }
  }
}
