import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  formTask: FormGroup;

  constructor(
    public form: FormBuilder,
    private crudService: CrudService,
    private router:Router
  ) {

    this.formTask = this.form.group({
      title: new FormControl ('',Validators.required),
      description:new FormControl ('',Validators.required),
      date:new FormControl ('',Validators.required)
    })
  }
  sendTask(): any{

    if (this.formTask.invalid) {
      // Marcar todos los campos como "tocado" para mostrar los mensajes de error
      this.markAllFieldsAsTouched();
      return;
    }
    this.crudService.addTask(this.formTask.value).subscribe(() => {
        this.router.navigateByUrl('/sort-tasks');
    });
  }

 // Marcar todos los campos como "tocado"
  private markAllFieldsAsTouched(): void {
    Object.keys(this.formTask.controls).forEach(field => {
      const control = this.formTask.get(field);
      control?.markAsTouched();
    });
  }
}
