import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-date-to-seconds',
  templateUrl: './date-to-seconds.component.html',
  styleUrls: ['./date-to-seconds.component.scss']
})
export class DateToSecondsComponent implements OnInit {
  yearInput: number;
  monthInput: number;
  dayInput: number;
  hourInput: number;
  minuteInput: number;
  secondInput: number;
  milliSecs: number;
  now: Date; 
  localDate;
  localTime;
  localTimeZone;
  localTimeZoneName;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>this.onLoadData(), 1000);
  }
  
  //FUNCTION FOR AUTO-TIMER PALETTE
  onLoadData(){
    this.now = new Date()
    this.localDate = moment(this.now.toUTCString()).format("DD MMM YYYY");
    this.localTime = moment(this.now.toUTCString()).format("HH:mm:ss");
    var localTimeZoneTempArr = this.now.toString().split(' ')
    this.localTimeZone = localTimeZoneTempArr[5]
    this.localTimeZoneName = (localTimeZoneTempArr[6]+localTimeZoneTempArr[7]+localTimeZoneTempArr[8]).replace('(', '').replace(')', '')
  }

  //FUNCTION FOR CONVERSION TO UNIX
  convertDateToSecs(){
    var milliseconds = new Date(this.yearInput || 0, this.monthInput-1 || 0, this.dayInput || 0, this.hourInput || 0, this.minuteInput || 0, this.secondInput || 0);
    this.milliSecs = moment(milliseconds).unix();
  }

  //TO DISPLAY THE CURRENT DATE DATA 
  currentDateFun(){
    var getDate = new Date();
    this.yearInput = parseInt(moment(getDate).format('YYYY'));
    this.monthInput = parseInt(moment(getDate).format('MM'));
    this.dayInput = parseInt(moment(getDate).format('DD'));
    this.hourInput = parseInt(moment(getDate).format('HH'));
    this.minuteInput = parseInt(moment(getDate).format('mm'));
    this.secondInput = parseInt(moment(getDate).format('ss'));
    this.milliSecs = moment(getDate).unix();

    //TO ELEMINATE MATERIAL DESIGN FLAW IN INPUT FIELD
    var divs =  document.getElementById("dts").querySelectorAll('.mdl-textfield');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('is-dirty');
    }
  }
  
}
