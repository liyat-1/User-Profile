
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDRoutingModule } from './crud-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
   UserListComponent,
   UserDetailComponent,
   UserFormComponent,
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule, 
    MatButtonModule,
    MatDialogModule,
   
   
   ]
})
export class CRUDModule { }
