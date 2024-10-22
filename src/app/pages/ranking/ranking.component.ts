import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  ranking: { username: string; score: number }[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.ranking = this.userService.getRanking().sort((a, b) => b.score - a.score);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
