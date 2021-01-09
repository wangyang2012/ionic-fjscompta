import {Component, OnInit} from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  browser: any;

  options: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no',
    fullscreen: 'yes',
    toobar: 'yes'
  };

  constructor(private iab: InAppBrowser) {
  }

  showBrowser() {
    this.browser = this.iab.create('http://fjscompta.com/');
  }

  closeBrows() {
    this.browser.close();
  }

  showBrowserWithTarget(target: string) {
    this.iab.create('https://www.google.fr', target, this.options);
  }

  ngOnInit(): void {
    this.iab.create('http://fjscompta.com/', '_self', this.options);
  }
}
