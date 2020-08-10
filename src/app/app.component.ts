import { Component, Input } from '@angular/core';
import { Rectangle} from './rectangle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() height: number;
  total = this.height;
}
// export class ClickMeComponent {
//   clickMessage = '';

class ClickMeComponent{
   CalculateArea;
  }

