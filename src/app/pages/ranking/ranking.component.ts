import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  ranking: { username: string; score: number }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.ranking = this.userService.getRanking().sort((a, b) => b.score - a.score);
  }
}
