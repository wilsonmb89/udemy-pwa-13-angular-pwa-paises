import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaisInterface } from '../models/paises.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public paises: PaisInterface[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPaises(): Observable<PaisInterface[]> {
    if (!!this.paises && this.paises.length > 0) {
      return of(this.paises);
    }
    return this.httpClient.get<PaisInterface[]>('https://restcountries.eu/rest/v2/lang/es').pipe(
      tap(
        paises => {
          this.paises = paises;
        }
      )
    );
  }

  public findByPais(codigoPais: string): PaisInterface {
    return this.paises.find(pais => pais.alpha3Code === codigoPais);
  }
}
