import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

/**
 * App Root
 */
import {AppComponent} from './app.component';
import {BannerComponent} from './components/banner/banner.component';

/**
 * Routing Module
 */
import {AppRoutingModule} from './app-routing.module';

/**
 * Feature Modules
 */
import {CoreModule} from './core/core.module';
import {AuthModule} from './modules/auth';


// import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';
//
// import {apiUrl} from './services/api';

// const config: SocketIoConfig = {url: apiUrl, options: {}};
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    AppRoutingModule,
    // SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}



