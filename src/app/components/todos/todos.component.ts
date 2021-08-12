import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import swal from 'sweetalert';
import { LocalStorageService } from '../../local-storage.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {



  todos: Todo[] = [];
  inputTodo: string = "";
  public queryResult: any;
  isEnabled: boolean = false


  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // this.getTodo()

    this.todos = this.localStorageService.getItem()


  }

  toggleDone(id: any) {
    this.todos.map((v, i) => {
      if (i == id)
        v.completed = !v.completed;
      return v;

    })
  }

  // deleteTodo(id:number){
  //   this.todos = this.todos.filter((v,i)=>i !==id);
  //   localStorage.removeItem('todo')
  // }

  openSweetAlert(id: any) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      dangerMode: true,
      // showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      // confirmButtonText: 'Yes, delete it!'
    }).then((deleteTask) => {
      if (deleteTask) {
        this.todos = this.todos.filter((v, i) => i !== id);

        // this.localStorageService.setItem(this.inputTodo)

        this.localStorageService.removeItem(this.inputTodo)
        // this.todos = this.localStorageService.getItem()
        swal(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
      }
    })
  }

  // openSweetAlert(id:number){
  //   swal({
  //   title: "Are you sure?",
  //   text: "Once deleted, you will not be able to recover this task!",
  //   icon: "warning",

  //   dangerMode: true,
  // })
  // .then((deleteTask) => {
  //   if (deleteTask) {
  //     this.deleteTodo;
  //     swal("Poof! Your task has been deleted!", {
  //       icon: "success",
  //     });
  //   } else {
  //     swal("Your imaginary file is safe!");
  //   }
  // })
  // }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    // this.queryResult = this.inputTodo
    this.localStorageService.setItem(this.inputTodo)
    this.todos = this.localStorageService.getItem()

    this.inputTodo = "";

  }

}
function index(index: any) {
  throw new Error('Function not implemented.');
}

