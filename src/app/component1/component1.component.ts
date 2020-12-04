import { Component, EventEmitter,Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public name="Coder";
  public myid="testid";
  public successClass="text-success";
  public greetings="";
  public user="";
  public flag=false;
  public color="Pink";
  public vowels=['a','e','i','o','u'];
  public person={
    "name":"Sahrukh",
    "Age":60
  }
  public date=new Date();
 @Input('parentData') public name2;
 @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  onClick(event){
    //console.log(event);
    //this.greetings=event.type;
    this.greetings="Welcome to codevolution";
  }

  onLog(value)
  {
    console.log(value);
  }

  fireevent()
  {
    this.childEvent.emit('Hey!! Welcome To Angular');
  }

}
