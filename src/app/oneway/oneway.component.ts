import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {
  user:any={
    myname:"",
    email:"",
    registerno:"",
    age:"",
    aadhaarno:""
  }

  constructor() { }

  ngOnInit() {
  }
  
  sub(value){
    this.user.myname = value.myname;
    this.user.email = value.email;
    this.user.registerno = value.registerno;
    this.user.age = value.age;
    this.user.aadhaarno = value.aadhaarno;
    console.log(value)
  }
}
  