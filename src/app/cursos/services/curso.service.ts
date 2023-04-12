import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../cursos/model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  // private readonly URL_API = '../../../assets/cursos-mock.json';
  private readonly LOCALHOST_URL = 'api/cursos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.LOCALHOST_URL)
    .pipe(
      // delay(5000)
    );
  }
}
