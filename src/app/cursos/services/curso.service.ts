import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../cursos/model/curso';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly URL_API = '../../../assets/cursos-mock.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.URL_API)
    .pipe(
      delay(5000)
    );
  }
}
