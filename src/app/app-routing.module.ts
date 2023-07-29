import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './shared/components/add-task/add-task.component';
import { EditTaskComponent } from './shared/components/edit-task/edit-task.component';
import { SortTasksComponent } from './shared/components/sort-tasks/sort-tasks.component';


const routes: Routes = [

  /* Predeterminated route*/
  {path: '', pathMatch: 'full', redirectTo: 'add-task'},
  {path: 'add-task', component: AddTaskComponent },
  {path: 'edit-task/:id', component: EditTaskComponent },
  {path: 'sort-tasks', component: SortTasksComponent },
  /* if the route doesn't match with anyone of the above*/
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
