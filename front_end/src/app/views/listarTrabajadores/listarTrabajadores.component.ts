import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TrabajadorService } from '../../services/TrabajadorService';

@Component({
  selector: 'app-listartrabajadores',
  templateUrl: './listarTrabajadores.component.html',
  styleUrls: ['./listarTrabajadores.component.scss']
})
export class ListarTrabajadoresComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private trabajadoresService: TrabajadorService, private router: Router) { }

  ngOnInit(): void {
  }

}
