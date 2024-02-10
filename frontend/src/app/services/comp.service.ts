import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compound } from '../Compound';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CompService {
  private apiUrl = 'http://localhost:5000/compounds';

  constructor(private http: HttpClient) {}

  getCompounds(): Observable<Compound[]> {
    return this.http.get<Compound[]>(`${this.apiUrl}/all`);
  }

  getCompoundById(id: Number): Observable<Compound> {
    return this.http.get<Compound>(`${this.apiUrl}/${id}`);
  }

  addCompound(compound: Compound): Observable<Compound> {
    return this.http.post<Compound>(
      `${this.apiUrl}/create`,
      compound,
      httpOptions
    );
  }

  deleteCompound(id: Number): Observable<Compound> {
    return this.http.delete<Compound>(`${this.apiUrl}/${id}`, {
      responseType: 'text' as 'json',
    });
  }
}
