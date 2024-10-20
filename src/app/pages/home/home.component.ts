import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';

  constructor(private router: Router, private userService: UserService) {}

  startGame() {
    if (this.username.trim()) {
      this.userService.setUsername(this.username);
      this.router.navigate(['/game']);
    }
  }
}
