import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CursoService } from '../services/curso.service';
import { Curso } from './model/curso';

''
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos$: Observable<Curso[]>;
  displayedColumns = ['id', 'nome', 'categoria'];

  constructor(private cursoService: CursoService) {
    this.cursos$ = this.cursoService.list();
  }
}
