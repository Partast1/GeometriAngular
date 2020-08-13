import { Component, Input } from '@angular/core';
import { Rectangle} from './rectangle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() length: number;
  @Input() width: number;
  @Input() rectSum: number;
  @Input() degrees: number;
  @Input() squareSum: number;

  CalcRectangle(width: number, length: number){
    this.rectSum = length * width;

  }
  CalcSquare(degress: number){
    this.squareSum = degress * degress;
  }
}
// export class ClickMeComponent {
//   clickMessage = '';

