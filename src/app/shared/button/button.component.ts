import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = 'Button';  // Texto del botón
  @Input() disabled: boolean = false;  // Habilitar o deshabilitar el botón
  @Input() type: 'button' | 'submit' = 'button';  // Tipo de botón (por defecto 'button')
  @Input() styleClass: string = '';  // Clases de estilo adicionales para personalización

  @Output() buttonClick = new EventEmitter<void>();  // Evento que emite al hacer clic

  onClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
