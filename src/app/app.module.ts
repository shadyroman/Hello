import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router, Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './HelloWorld/HelloWorld.component';
import { LolComponent } from './lol/lol.component';
import  {LoginComponent} from'./User/Login.component'

import { HttpModule } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
// import {UserInfoModel } from './Models/UserInfo';

export function translateHttpLoaderFactory(http: HttpClient) {
return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

const appRoutes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: 'home'},
  { path: 'hello', component:HelloWorldComponent  },
  { path: 'login', component:LoginComponent  },
  {path:'register', component:RegisterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
     HelloWorldComponent,
     LolComponent,
     LoginComponent,
     RegisterComponent,
     HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
     
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
     RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    )
  
  ],
  providers: [HttpClientModule,HttpClient],
  bootstrap: [AppComponent],

})
export class AppModule { }
