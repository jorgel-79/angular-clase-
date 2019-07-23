import { Component, OnInit } from '@angular/core';
import {TodoService} from './../services/todo.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todo : any = []
  taskEnd: number
  constructor(private _serviTodo:TodoService) { 
    
    this.taskEnd = _serviTodo.getCountTask()
  }

  ngOnInit() {
    this._serviTodo.getTodo().subscribe(
      (data)=>{
        console.log(data);
        
        this.todo = data
      }
    )
  }

  addtask(task:any ,descr:any ){
    // this.todo.push(
    //   {"task":task.value,
    //     "descr":descr.value}
    //   )
    this._serviTodo.addTodo(task.value,descr.value).subscribe(
      (data)=>{
        console.log("se realizo la nueva tarea",data);
        
      }
      ,

      (err)=>{
        console.log("error");
        
      }

    )
     task.value="" 
     descr.value=""
    return false
  }

  deleteTask(taskToDelete:string){
    let indexToDelete : number;
    this.todo.forEach((element,index)=>{
      if(taskToDelete == element.task){
        indexToDelete = index
      }
    })
    this.todo.splice(indexToDelete,1)
  }



}
