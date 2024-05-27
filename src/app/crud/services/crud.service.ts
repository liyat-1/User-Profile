import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CRUDService {


  constructor(
    private httpClient: HttpClient
  ) { }

  loadUsers() {
    const url = environment.API_EndPoint + 'view.php';
    return this.httpClient.get(url).pipe(map(data => data));
  }
//@ts-ignore
  createUser(data: any): Observable<HttpResponse> {
    const url = environment.API_EndPoint + 'create.php';
    //@ts-ignore
    return this.httpClient.post<HttpResponse>(url, data).pipe(map(data => data));
  }
//@ts-ignore
  loadUserInfo(userId: any): Observable<User> {
    const url = environment.API_EndPoint + 'view_one.php?id=' + userId;
    //@ts-ignore
    return this.httpClient.get<User>(url).pipe(map(data => data));
  }
//@ts-ignore
  updateUserDetail(data: any): Observable<HttpResponse> {
    const url = environment.API_EndPoint + 'update.php';
    //@ts-ignore
    return this.httpClient.post<HttpResponse>(url, data).pipe(map(data => data));
  }


  //@ts-ignore
  deleteUser(userId: any): Observable<HttpResponse> {
    const url = environment.API_EndPoint + 'delete.php?id=' + userId;
    //@ts-ignore
    return this.httpClient.get<HttpResponse>(url).pipe(map(data => data));
  }

}
