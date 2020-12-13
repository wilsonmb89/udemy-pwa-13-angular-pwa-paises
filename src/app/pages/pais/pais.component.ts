import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisInterface } from 'src/app/models/paises.model';
import { PaisesService } from 'src/app/services/paises.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  paisData: PaisInterface;

  constructor(
    private paisesService: PaisesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const codigoPais = params.get('id');
        return of(this.paisesService.findByPais(codigoPais));
      })
    ).subscribe(
      paisData => {
        if (!!paisData) {
          this.paisData = paisData;
          console.log(paisData);
        } else {
          this.salirPagina();
        }
      }
    );
  }

  private salirPagina(): void {
    this.router.navigate(['/']);
  }

}
