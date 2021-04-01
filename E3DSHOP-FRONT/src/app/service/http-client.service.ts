import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 

  }

getUsers()
{
  return this.httpClient.get<User[]>('http://localhost:8083/users/get');
}
addUser(newUser: User) {
  return this.httpClient.post<User>('http://localhost:8083/users/add', newUser);   
}

}
