import { Component, OnInit } from '@angular/core';
import { HttpModule, RequestOptions,Headers } from '@angular/http';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  ResponseStatusCode1 } from "../Enums/ResponseStatusCode";




@Component({
  selector: 'app-Login',
  templateUrl: '/Login.component.html',
  styleUrls: ['/Login.component.css']
})


export class LoginComponent {
 
constructor(private http:HttpClient) {}

email:string;
password:string;
img:string;
errorMessage:string = '';
ngOnInit() {


  //   $('#login-form-link').click(function(e) {

	// 	$("#login-form").delay(100).fadeIn(100);
 	// 	$("#register-form").fadeOut(100);
	// 	$('#register-form-link').removeClass('active');
	// 	$(this).addClass('active');
	// 	e.preventDefault();
	// });
	// $('#register-form-link').click(function(e) {
	// 	$("#register-form").delay(100).fadeIn(100);
 	// 	$("#login-form").fadeOut(100);
	// 	$('#login-form-link').removeClass('active');
	// 	$(this).addClass('active');
	// 	e.preventDefault();
  // });
  
}

 login(email,password)
 {
         const requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'application/json');
  
const headers1 = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

       
const url='http://services.fpetest.linkdevsite.com/api/Account/GetToken';

//  return this.http.post(url, {email:this.email,password:this.password},{headers:headers1}).subscribe(
//    res =>console.log(res));



  this.http.post(url, {email:this.email,password:this.password},{headers:headers1}).subscribe((data : any)=>{
  // alert(data.UserInfo.ProfileImage);
  // this.img = data.UserInfo.ProfileImage;
var code:ResponseStatusCode1=data.Status;
   alert( data.Message);
switch(code)
  {
    case ResponseStatusCode1.Failed:
    this.errorMessage = data.Message;
 
    break;
  }
  console.log(data);
    },
    (err : HttpErrorResponse)=>{
      console.log(err.error.Status);
      console.log(err.error.Message);
      var responseErrorStatusCode= err.error.Status;
      var responseErrorMessage= err.error.Message;


debugger;

var code:ResponseStatusCode1=err.error.Status;

switch(code)
  {
    case ResponseStatusCode1.Failed:
    this.errorMessage = responseErrorMessage;
    alert( this.errorMessage);
    break;
  }


    });

 }

 

}



