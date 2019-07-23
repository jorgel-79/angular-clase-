import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import {TodoService } from './../services/todo.service';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  task: string 
  descr:string
  idtask:string
  date:string
   
  
  constructor(private _serviceTodo:TodoService,private rutaActiva: ActivatedRoute,private router: Router) {
    this.idtask = rutaActiva.snapshot.params.task
    this._serviceTodo.getOneTodo(this.idtask,this.date).subscribe((data)=>{
      console.log(data)
      this.task = data[0]["title"];
      this.descr = data[0]["descr"];
      this.date = data[0]["dateInit"];
      

    },(errHttp)=>{})
    
   }

  ngOnInit() {
  }
  finalizar(){
    this._serviceTodo.getAddTaskEnd()
    this._serviceTodo.deleteTodo(this.idtask)
    this.router.navigateByUrl("/");
  }

}
