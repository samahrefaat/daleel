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
    translate.setDefaultLang('en'); // Set default language
    translate.use('en'); // Use a specific language
  }

  ngOnInit() {
    // Access the native DOM element
    setTimeout(() => {
      const parentDiv = this.elementRef.nativeElement.querySelector('span');

      // Check if the parentDiv is found
      if (parentDiv) {
        console.log('testtttt');

        // Iterate over child nodes
        Array.from(parentDiv.childNodes).forEach((node: any) => {
          // Check if the text node contains the desired text
          if (
            node.nodeType === Node.TEXT_NODE &&
            node.nodeValue.includes(
              'This application was built using a trial version of Syncfusion Essential Studio.'
            )
          ) {
            // Hide the parent div
            parentDiv.style.display = 'none';
          }
        });
      }
    }, 1000);
  }
}
