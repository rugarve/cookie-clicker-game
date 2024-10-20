import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { GameService } from './services/game/game.service';
import { UserService } from './services/user/user.service';
import { RankingComponent } from './pages/ranking/ranking.component';
import { ButtonComponent } from './shared/button/button.component';
import { RowComponent } from './shared/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    RankingComponent,
    ButtonComponent,
    RowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GameService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }