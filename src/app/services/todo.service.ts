import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  base:"http://localhost:3000/"
  todoend : number = 0
  todo: {}[] = [
    {
      "task": "Tarea # 1",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 2",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 3",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 4",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 5",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 6",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }

  ]
  constructor(private http:HttpClient) { }

  getTodo(){
    //return this.http.get(this.base+"todo")
    return this.http.get('http://localhost:3000/todo')
  }

  addTodo(task:string,descr:string){
   /* this.todo.push(
      {
        "task":task,
        "descr":descr
      }
      )*/

      return this.http.post("http://localhost:3000/todo",{
        "task":task,
        "descr":descr,
        
      })
  }

  deleteTodo(taskToDelete:string){
    let indexToDelete : number;
    this.todo.forEach((element,index)=>{
      if(taskToDelete == element["task"]){
        indexToDelete = index
      }
    })

    this.todo.splice(indexToDelete,1)
  }

  getOneTodo(task:string, _id:any){
    /*let indexToGet : number;
    this.todo.forEach((element,index)=>{
      if(task == element["task"]){
        indexToGet = index
      }
    })
    return this.todo[indexToGet] */

    return this.http.get("http://localhost:3000/todo/task/"+task)

  }

 /* getMoreTodo(task:string){

    return this.http.get("http://localhost:3000/todo",{

     })
  }*/

  getCountTask(){
    return this.todoend
  }

  getAddTaskEnd(){
    this.todoend ++
  }

}
