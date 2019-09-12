import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = 'Data binding using Event Binding';
  string = 'Angular provides us with other types of binding, i.e., event binding, which is used to handle the events raised from the DOM like button click, mouse move etc.Suppose we have a button in the HTML template and we want to handle the click event of this button. To implement event binding, we will bind click event of a button with a method of the component.';
  onSave($event){  
    console.log("Save operation is performed!", $event,);  
  } 
  onDivClick(){  
    console.log("DIV is clicked!");  
  } 
}
