import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'rxjs/add/operator/map';

if (environment.production) {
  enableProdMode();
  var _hmt = _hmt || [];
  (function() {
    const hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?a7c848aac0f0daf4b89603e16c40b8e7';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  })();
}

platformBrowserDynamic().bootstrapModule(AppModule);
