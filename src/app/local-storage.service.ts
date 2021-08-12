import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
  todoKey:string = 'todos'
  constructor() { }
  public setItem( value: string) {
    const todos:string[] = this.getItem()
    todos.push(value)
    localStorage.setItem(this.todoKey, JSON.stringify(todos));

  }

  public getItem(){
    let todos:any;
    if (localStorage.getItem(this.todoKey)) {
    todos = localStorage.getItem(this.todoKey)
    return JSON.parse(todos);
    } else {
    return []
}
}

  public removeItem(value:any) {
    let todos:[]=this.getItem()
    todos.splice(value,1)
    localStorage.setItem(this.todoKey, JSON.stringify(todos));
  //  let todos:any = JSON.parse(localStorage[this.todoKey])
  //  for (let i=0;i<todos.length;i++){
  //   if (todos[i].id ==i){
  //     todos.splice(i,1)
  //   }

  //  }
  //  todos = this.getItem()
  //   todos.push(value)
  //   localStorage.setItem(this.todoKey, JSON.stringify(todos));


  }
  public clear(){
    localStorage.clear();
  }
}
