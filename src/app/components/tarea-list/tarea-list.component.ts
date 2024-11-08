import { Component } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button'; 

@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [ButtonModule, FormsModule, ReactiveFormsModule, TableModule, DialogModule, ButtonModule,DropdownModule],
  templateUrl: './tarea-list.component.html',
  providers: [DialogService],
  animations: [
    trigger('fadeInOut',[
      state('void', style({opacity: 0})),
      transition(':enter',[animate('500ms ease-in')]),
      transition(':leave', [animate('500ms ease-out', style({opacity: 0}))])
    ])
  ],
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent {
tareas: any[] = [];
displayDialog: boolean = false;
tareaForm!: FormGroup;
usuarios: any[] = [];


constructor (private fb: FormBuilder) {}

ngOnInit(){
  this.tareaForm = this.fb.group({
    idTarea: [null],
    tarea: ['',Validators.required],
    descripcion: ['', Validators.required],
    completada: [false],
    usuarioo: [null, Validators.required
    ]
  });
}

OpenDialog() {
  this.displayDialog = true;
}
}