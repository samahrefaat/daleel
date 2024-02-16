import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'PerSkool';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Set default language
    translate.use('en'); // Use a specific language
  }
}
