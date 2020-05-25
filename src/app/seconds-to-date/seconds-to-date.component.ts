import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-seconds-to-date',
  templateUrl: './seconds-to-date.component.html',
  styleUrls: ['./seconds-to-date.component.scss']
})
export class SecondsToDateComponent implements OnInit {
  utc: string = '';
  local: string = '';
  secondsInp: number;
  now: Date; 
  utcDate;
  utcTime;
  unixSecs;

  @ViewChild('secondsInput') secondsInput: ElementRef<any>

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>this.onLoadData(), 1000);
  }

  //FUNCTION FOR AUTO-TIMER PALETTE
  onLoadData(){
    this.now = new Date(); 
    var utcTemp = this.now.toUTCString().slice(0,this.now.toUTCString().length-3)
    
    this.utcDate = moment(utcTemp).format("DD MMM YYYY");
    this.utcTime = moment(utcTemp).format("HH:mm:ss");
    this.unixSecs = moment(this.now.toUTCString()).unix();
  }

  //UNIX TO DATE CONVERSION FUNCTION
  convertToDate(data){
    
    //UTC CONVERSION
    let tempUtcArr = new Date(parseInt(data.value+'000')).toUTCString().replace(",", "").split(' ');
    this.utc = tempUtcArr[0]+' '+tempUtcArr[2]+' '+tempUtcArr[1]+' '+tempUtcArr[3]+' '+tempUtcArr[4];

    //LOCAL CONVERSION
    this.local = new Date(parseInt(data.value+'000')).toString().replace(/\G[^.]+$/, '');
  }

  //TO DISPLAY THE CURRENT DATE DATA 
  currentDateFun(){
    var getDate = new Date();
    this.secondsInp = moment(getDate).unix();
    this.convertToDate({value: this.secondsInp})
    
    //TO ELEMINATE MATERIAL DESIGN FLAW IN INPUT FIELD
    var divs =  document.getElementById("std").querySelectorAll('.mdl-textfield');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('is-dirty');
    }
  }

}
