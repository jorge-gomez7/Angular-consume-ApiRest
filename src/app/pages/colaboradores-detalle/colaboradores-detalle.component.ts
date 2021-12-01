import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ColaboradoresService } from '../../services/colaboradores.service'

@Component({
  selector: 'app-colaboradores-detalle',
  templateUrl: './colaboradores-detalle.component.html',
  styleUrls: ['./colaboradores-detalle.component.css']
})
export class ColaboradoresDetalleComponent implements OnInit {

  public colaborador: any;

  constructor(private colaboradorService: ColaboradoresService, private router: Router, private route: ActivatedRoute) {
    /* valor inicial hasta que lleguen los datos */
    this.colaborador = {
      nombres: '',
      gradoAcademico: '',
      direccion: '',
      estadoCivil: '',
      nacimiento: '',
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.colaboradorService.getWorker(id).subscribe(res => {
      this.colaborador = res.colaborador;

    })
  }


  deleteWorker(id: string) {
    return this.colaboradorService.deleteWorker(id).subscribe(res => {
      this.router.navigateByUrl('/colaboradores');
    })
  }

}
