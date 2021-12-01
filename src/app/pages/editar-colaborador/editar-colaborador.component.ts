import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { ColaboradoresService } from '../../services/colaboradores.service';
import { colaborador } from '../../interfaces/colaborador.interface';

@Component({
  selector: 'app-editar-colaborador',
  templateUrl: './editar-colaborador.component.html',
  styleUrls: ['./editar-colaborador.component.css']
})
export class EditarColaboradorComponent implements OnInit {


  public colaborador: any;
  formSubmitted = false;


  constructor(private fb: FormBuilder, private colaboradorService: ColaboradoresService, private router: Router, private route: ActivatedRoute) { }


  public colaboradorForm = new FormGroup({
    nombres: new FormControl(''),
    gradoAcademico: new FormControl(''),
    direccion: new FormControl(''),
    estadoCivil: new FormControl(''), //{ value: '', disabled: true }
    nacimiento: new FormControl('')
  })


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.colaboradorService.getWorker(id).subscribe(res => {
      this.colaborador = res.colaborador;

      this.colaboradorForm.setValue({
        nombres: this.colaborador.nombres,
        gradoAcademico: this.colaborador.gradoAcademico,
        direccion: this.colaborador.direccion,
        estadoCivil: this.colaborador.estadoCivil,
        nacimiento: this.colaborador.nacimiento
      });
    });

  }

  campoNoValido(campo: string): boolean {
    if (this.colaboradorForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }


  updateWorker() {

    const form = this.colaboradorForm.value;

    this.colaboradorService.updateWorker(this.colaborador._id, form).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/colaboradores');
    })
  }

}
