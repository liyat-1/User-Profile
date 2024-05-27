import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'user-list', 
    pathMatch:'full'
  },
  {
    path:'user-list',
    component: UserListComponent
  },
  {
    path:'create-user',
    component: UserFormComponent
  },
  {
    path:'update-user/:userId',
    component:UserFormComponent 
  },
  {
    path:'view-user-details/:userId',
    component: UserDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
