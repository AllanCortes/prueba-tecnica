import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './shared/components/add-task/add-task.component';
import { EditTaskComponent } from './shared/components/edit-task/edit-task.component';
import { SortTasksComponent } from './pages/sort-tasks/sort-tasks.component';


const routes: Routes = [

  /* Predeterminated route*/
  { path: '', redirectTo: 'sort-tasks', pathMatch: 'full' },
  {path: 'sort-tasks', component: SortTasksComponent },
  {path: 'add-task', component: AddTaskComponent },
  {path: 'edit-task/:id', component: EditTaskComponent },
  /* if the route doesn't match with anyone of the above*/
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
