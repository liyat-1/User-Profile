
import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetail: User | undefined;

  constructor(
    private crudService: CRUDService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let userId = '';
    if (this.activatedRoute.snapshot.params['userId']) {
      userId = this.activatedRoute.snapshot.params['userId'];
      if (userId !== '') {
        this.loadUserDetail(userId);
      }
    }
  }

  loadUserDetail(userId: any): void {
    this.crudService.loadUserInfo(userId).subscribe(res => {
      this.userDetail = res;
    });
  }
}
