import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
        return user ? {
          id: user.id,
          username: user.username,
          firstname: user.name.split(' ')[0],
          lastname: user.name.split(' ')[1] || 'Unknown',
          email: user.email,
          password: password
        } : null;
      })
    );
  }

}
