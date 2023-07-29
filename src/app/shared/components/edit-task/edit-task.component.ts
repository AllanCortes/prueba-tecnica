import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  formTask: FormGroup;
  editId: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    public form: FormBuilder,
    private router:Router
  ) {

    this.editId = this.activeRoute.snapshot.paramMap.get('id');
    this.crudService.getTask(this.editId).subscribe(
      response => {
        this.formTask.setValue({
          title: response[0]['titulo'],
          description: response[0]['descripcion'],
          date: response[0]['fecha_vencimiento'],
        });
      }
    );
    this.formTask = this.form.group({
      title:['',Validators.required],
      description:['',Validators.required],
      date:['',Validators.required]
    })
  }

  updateTask(): any{

    if (this.formTask.invalid) {
      // Marcar todos los campos como "tocado" para mostrar los mensajes de error
      this.markAllFieldsAsTouched();
      return;
    }
    this.crudService.editTask(this.formTask.value,this.editId).subscribe(() => {
        this.router.navigateByUrl('/sort-tasks');
    });
  }

  private markAllFieldsAsTouched(): void {
    Object.keys(this.formTask.controls).forEach(field => {
      const control = this.formTask.get(field);
      control?.markAsTouched();
    });
  }

}
