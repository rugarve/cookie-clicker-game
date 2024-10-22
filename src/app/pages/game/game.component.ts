import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  username: string = '';
  points: number = 0;
  autoClickers: number = 0;
  autoClickerCost: number = 50;
  autoclikersStop: number = 0;
  interval: any;
  autoClickersRunning: number = 0;

  constructor(private gameService: GameService, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.username = this.userService.getUsername();
    const savedState = this.userService.getPlayerState(this.username);

    if (savedState) {
      this.points = savedState.points;
      this.autoClickers = savedState.autoClickers;
      this.updateAutoClickerCost();
    }
  }

  updateAutoClickerCost() {
    this.autoClickerCost = 50 * (this.autoClickers + 1);
  }

  addPoint() {
    this.points++;
    this.gameService.updatePoints(this.username, this.points);
  }

  buyAutoClicker() {
    if (this.points >= this.autoClickerCost && this.autoClickersRunning === 0) {
      this.points -= this.autoClickerCost;
      this.autoclikersStop = this.autoClickerCost;
      this.autoClickers++;
      this.updateAutoClickerCost();
      this.gameService.updatePoints(this.username, this.points);
      this.gameService.updateAutoClickers(this.username, this.autoClickers);

      this.autoClickersRunning = this.autoClickers;
      this.startAutoClickerPoints(this.autoclikersStop);
    }
  }

  startAutoClickerPoints(autoClickerStop: number) {
    let pointsGenerated = 0;
    const pointsPerClicker = this.autoClickers;

    this.interval = setInterval(() => {
      this.points += pointsPerClicker;
      this.gameService.updatePoints(this.username, this.points);
      pointsGenerated += pointsPerClicker;

      if (pointsGenerated >= autoClickerStop) {
        clearInterval(this.interval);
        this.autoClickersRunning = 0;
      }
    }, 100);
  }

  exitGame() {
    clearInterval(this.interval);
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}