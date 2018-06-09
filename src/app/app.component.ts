import { Component } from '@angular/core';
 import { Router } from '@angular/router';
 import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   constructor(private router:Router,private translateService: TranslateService)
   {
translateService.setDefaultLang('en');
   }

  title = 'TepDeal';
message:string;
message1:string;
switchLanguage(language: string) {
  this.translateService.use(language);
}

   redirectToHelloWorldPage(message1) : void
  {
    debugger;

this.message = message1;
 this.message1 = "";
     this.router.navigate(['hello'])
 
   }

}



