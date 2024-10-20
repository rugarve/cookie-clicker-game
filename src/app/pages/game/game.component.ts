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
  autoClickerCost: number = 50; // El primer autoClicker cuesta 50
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
      this.updateAutoClickerCost(); // Asegurarnos de que el costo se actualice correctamente
    }
  }

  // Actualiza el costo de los auto-clickers
  updateAutoClickerCost() {
    this.autoClickerCost = 50 * (this.autoClickers + 1); // El costo aumenta en múltiplos de 50 con cada compra
  }

  // Añadir un punto manualmente al hacer clic en el botón
  addPoint() {
    this.points++;
    this.gameService.updatePoints(this.username, this.points);
  }

  // Comprar un auto-clicker
  buyAutoClicker() {
    if (this.points >= this.autoClickerCost && this.autoClickersRunning === 0) {
      this.points -= this.autoClickerCost; // Restamos el costo del auto-clicker
      this.autoclikersStop = this.autoClickerCost;
      this.autoClickers++;
      this.updateAutoClickerCost(); // Actualizamos el costo para el siguiente auto-clicker
      this.gameService.updatePoints(this.username, this.points);
      this.gameService.updateAutoClickers(this.username, this.autoClickers);

      // Solo permite ejecutar el intervalo una vez por compra
      this.autoClickersRunning = this.autoClickers;
      this.startAutoClickerPoints(this.autoclikersStop); // Genera puntos hasta que alcance el coste del auto-clicker
    }
  }

  // Función para generar puntos por auto-clickers, y detener cuando se alcanza el costo del auto-clicker
  startAutoClickerPoints(autoClickerStop: number) {
    let pointsGenerated = 0; // Contador para puntos generados por este grupo de auto-clickers
    const pointsPerClicker = this.autoClickers; // 1 punto por auto-clicker por ciclo

    this.interval = setInterval(() => {
      this.points += pointsPerClicker; // Genera puntos en función del número de auto-clickers comprados
      this.gameService.updatePoints(this.username, this.points);
      pointsGenerated += pointsPerClicker;

      // Verificar si hemos generado puntos suficientes para el costo del auto-clicker
      if (pointsGenerated >= autoClickerStop) { // Genera hasta que alcance el coste del auto-clicker
        clearInterval(this.interval); // Detenemos el intervalo
        this.autoClickersRunning = 0; // Restablecemos para permitir más compras
      }
    }, 100); // Intervalo de 100ms para generar puntos
  }

  // Detener los auto-clickers al salir del juego
  exitGame() {
    clearInterval(this.interval); // Detenemos el intervalo cuando el jugador sale del juego
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    clearInterval(this.interval); // Asegurarse de limpiar el intervalo al destruir el componente
  }
}