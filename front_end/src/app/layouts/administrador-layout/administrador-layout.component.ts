import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador-layout',
  templateUrl: './administrador-layout.component.html',
  styleUrls: ['./administrador-layout.component.scss']
})
export class AdministradorLayoutComponent implements OnInit {

  constructor(private router : Router) { }
  
  ngOnInit(): void {

  }

}
