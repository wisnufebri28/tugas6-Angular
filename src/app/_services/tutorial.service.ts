import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(params): Observable<any> {
    console.log("i am server")
    return this.http.get(baseUrl, { params });
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/tutorials/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/tutorials/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/tutorials/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/tutorials`);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}/title=${title}`);
  }
}
