import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() styleClass: string = '';

  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
