import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public url = 'http://blog.miniasp.com/';
  public imgurl = '/assets/images/logo.png';
  public enterChar = 0;
  constructor() {
  }
  public changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }

  public calInputChar($event: KeyboardEvent) {
    // console.log($event);
    if ($event.key === 'Escape') {
      this.enterChar = 0;
      // HTMLInputElement加上型態，拿到value
      (<HTMLInputElement>$event.target).value = '';
    } else {
      // 其他輸入鍵累加
      this.enterChar += 1;
    }
  }
}
