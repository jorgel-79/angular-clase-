import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-cardview', // nombre para llamar el componente
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  @Input() task:string;
  @Input() descr:string;
  @Input() _id:any;
  @Output() data = new EventEmitter();
  
  
  constructor() { 
  }

  ngOnInit() {
  }

  delete(){
    let taskToDelete = this.task
    this.data.emit(taskToDelete)
 
  }



}
