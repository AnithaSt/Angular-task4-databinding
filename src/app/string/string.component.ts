import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = 'Data binding using String Interpolation'; 
  string = "String Interpolation is a one-way data-binding which is used to output the data from a TypeScript code to HTML template . It uses the template expression in double curly braces to display the data from the component to the view.";
  numberA: number = 10;  
  numberB: number = 20;
}
