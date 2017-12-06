import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `<h2>This is second component</h2>
                <div>{{content}}</div><br><br>
                <div [class.className]="forClass">Class binding element</div><br>
                <div [style.color]="colorRed? 'red' :'purple'">Style binding element</div>
                <br><input type="text" #randomInput>
                <button (click) = "fn(randomInput.value)"> enter</button>
                <br><br><div>press enter after input</div>
                <input type="text" #keyupInput (keyup.enter) = "keyfn(keyupInput.value)">
                <br><br>
                <div> first name <input type="text" [(ngModel)] = "fname"></div>
                <div> last name <input type="text" [(ngModel)] = "lname"></div>
                <br><div>hello {{fname}} {{lname}} </div>
                <br><br>
                <div *ngIf="show">This text is made visible by ngif true</div>
                <br>
                <div [ngSwitch]="case">
                    <p *ngSwitchCase= "'today'">this is today</p>
                    <p *ngSwitchCase= "'yesterday'">this is yesterday</p>
                    <p *ngSwitchDefault>it is a random today</p></div>
                <br>
                <ul>
                        <li *ngFor ="let pen of pens">{{pen}}</li>
                </ul>
                <img [src] = "imglink">`,
    styles: [`.className{
        font-size:40px;`]
})
export class SecondComponent {
  title = 'SecondComponent';
  public content = 'this is the text of second component';
  public imglink = 'http://keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg';
  public forClass = 'true';
  public colorRed = 'true';
  public fname;
  public lname;
  public show = 'true';
  public case = 'today';
  public pens = ['cello', 'ximi', 'auro'];
  fn(value) {
            console.log(value);
  }
  keyfn(value) {
      console.log(value);
  }

}
