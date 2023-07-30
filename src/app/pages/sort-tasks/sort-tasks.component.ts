import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-sort-tasks',
  templateUrl: './sort-tasks.component.html',
  styleUrls: ['./sort-tasks.component.css']
})
export class SortTasksComponent {
  Tasks: any;
  totalCount = 0;
  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit():void {
    this.crudService.getTasks().subscribe(response => {
      if (!response) {
        this.Tasks = [];
        this.totalCount = 0;
      } else {
        this.Tasks = response;
        this.totalCount = this.Tasks.length;
        console.log(this.totalCount);
      }
    });
  }

  deleteTask(id: any) {
    if (window.confirm('¿Desea borrar la tarea?')) {
        this.crudService.deleteTask(id).subscribe((response) => {
          this.ngOnInit();
      });
    }
  }

}
