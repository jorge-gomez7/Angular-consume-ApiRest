import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradoresService } from '../../services/colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  constructor(private colaboradoresService: ColaboradoresService, private router: Router) { }

  public colaboradores: any;

  ngOnInit(): void {

    this.getWorkers();

  }


  getWorkers() {
    this.colaboradoresService.getWorkers().subscribe(res => {
      this.colaboradores = res.colaboradores;
      console.log(this.colaboradores);
    });
  }





}
