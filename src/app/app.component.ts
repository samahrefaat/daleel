import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'PerSkool';

  constructor(
    private translate: TranslateService,
    private elementRef: ElementRef
  ) {
    translate.setDefaultLang('ar'); // Set default language
    translate.use('ar'); // Use a specific language
  }

  ngOnInit() {}
}
