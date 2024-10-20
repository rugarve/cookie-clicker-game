import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {
  @Input() rank: number = 0;
  @Input() username: string = '';
  @Input() score: number = 0;
}
