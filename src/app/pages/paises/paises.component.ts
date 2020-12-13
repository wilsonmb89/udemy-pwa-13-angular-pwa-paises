import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisInterface } from 'src/app/models/paises.model';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  $paises: Observable<PaisInterface[]>;

  constructor(
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.$paises = this.paisesService.getPaises();
  }

}
