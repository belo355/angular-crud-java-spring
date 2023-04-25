import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { CursoService } from '../services/curso.service';
import { Curso } from './model/curso';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos$: Observable<Curso[]>;
  displayedColumns = ['id', 'nome', 'categoria','acoes'];

  constructor(
    private cursoService: CursoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {

    this.cursos$ = this.cursoService.list()
      .pipe(
        catchError(e => {
          this.onError('erro ao carregar cursos');
          return of([]);
        })
      )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd(){
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

}
