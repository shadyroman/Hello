import { Component, OnInit, Injectable } from '@angular/core';
import     { AppComponent }  from '../app.component';
@Component({
  selector: 'app-HelloWorld',
  templateUrl: '/HelloWorld.component.html',
  styleUrls: ['/HelloWorld.component.css']
})


export class HelloWorldComponent {
constructor(private appComponent:AppComponent) { }

ngOnInit() {
  alert("Hello "+this.appComponent.message+" !");

   }

 

}
// export class HelloWorldComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }
// }
