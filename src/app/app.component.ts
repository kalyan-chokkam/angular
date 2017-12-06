import { Component } from '@angular/core';
import { SecondComponent} from './comp2';
@Component({
  selector: 'app-root',
  template: `<h1>App component</h1>
              <div>text regarding componenrt</div>
                <app-component2>hang tight...</app-component2>`
})
export class AppComponent {
}
