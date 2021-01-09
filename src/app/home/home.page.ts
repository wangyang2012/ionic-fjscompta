import {Component, OnInit} from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  options: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no',
    toobar: 'yes'
  };

  constructor(private iab: InAppBrowser) {
  }

  ngOnInit(): void {
    this.iab.create('http://fjscompta.com/', '_self', this.options);
    // this.iab.create('http://fjscompta.com/', '#container', this.options);
  }

}
