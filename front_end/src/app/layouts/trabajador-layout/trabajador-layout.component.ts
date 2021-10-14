import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navItemsJefeAlmacen, navItemsOperario, navItemsJefeObra } from './trabajador_nav';

@Component({
  selector: 'app-trabajador-layout',
  templateUrl: './trabajador-layout.component.html',
  styleUrls: ['./trabajador-layout.component.scss']
})
export class TrabajadorLayoutComponent implements OnInit {

  constructor(private router: Router) { }
  public sidebarMinimized = false;
  public navItems = [];
  private navItemsOperario

  ngOnInit(): void {

    this.navItems = navItemsJefeObra;


  }

}
