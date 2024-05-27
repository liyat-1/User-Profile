import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CRUDService } from './../services/crud.service';
import 'sweetalert2/src/sweetalert2.scss'
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

declare const Swal: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['u_id','u_name', 'u_description', 'u_photo', 'u_cover', 'u_age','u_album_name','u_album_image', 'actions'];

  dataSource = new MatTableDataSource<any>([]);
  userList: any[] = [];
  userListSubscribe: any;

  constructor(
    private crudService: CRUDService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  ngOnDestroy(): void {
    if (this.userListSubscribe) {
      this.userListSubscribe.unsubscribe();
    }
  }

  getUserList(): void {
    this.userListSubscribe = this.crudService.loadUsers().subscribe((res: any) => {
      this.userList = res as any[];
      this.dataSource = new MatTableDataSource<any>(this.userList);
    });
  }

  actionRender(params: any): HTMLElement {
    const div = document.createElement('div');
      div.classList.add('btn-group');

      const viewButton = document.createElement('button');
      viewButton.textContent = 'View';
      viewButton.classList.add('btn', 'btn-success');
      viewButton.id = 'viewField'; // Assign ID to the view button

      viewButton.addEventListener('click', () => {
        console.log('View clicked');
        this.viewUserDetail(params);
      });
      div.appendChild(viewButton);

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('btn', 'btn-warning');
      editButton.id = 'editField'; // Assign ID to the edit button

      editButton.addEventListener('click', () => {
        this.editUserDetail(params);
      });
      div.appendChild(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('btn', 'btn-danger');
      deleteButton.id = 'deleteField'; // Assign ID to the delete button

      deleteButton.addEventListener('click', () => {
        this.deleteUser(params);
      });
      div.appendChild(deleteButton);

      return div;

  }
  //
  viewUserDetail(params: any) {
    if (params && params.u_id) {
      console.log('Params:', params);
      console.log('User ID:', params.u_id);
      this.router.navigate(['/crud/view-user-details/' + params.u_id ]);
      console.log('Navigation to user details page initiated.');
    } else {
      console.error('User ID is undefined in params.');
    }
  }


  editUserDetail(params: any) {
    console.log('edit clicked')
    this.router.navigate(['/crud/update-user/' + params.u_id]);
  }
  deleteUser(params: any) {
    // Call the CRUD service directly to delete the user
    this.crudService.deleteUser(params.u_id).subscribe((res: { result: string; }) => {
      if (res.result === 'success') {
        // If deletion is successful, update the user list
        this.getUserList();
        // Optionally, show a confirmation message
        console.log('User deleted successfully.');
        this.router.navigate(['/crud/create-user']);
      } else {
        // Handle any errors or show an error message
        console.error('Failed to delete user.');
      }
    });
  }


}
