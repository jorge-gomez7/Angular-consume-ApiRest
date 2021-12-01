import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ColaboradoresService } from '../../services/colaboradores.service'

@Component({
  selector: 'app-crear-colaboradores',
  templateUrl: './crear-colaboradores.component.html',
  styleUrls: ['./crear-colaboradores.component.css']
})
export class CrearColaboradoresComponent implements OnInit {


  formSubmitted = false;

  public colaboradorForm = this.fb.group({
    nombres: ['', Validators.required],
    gradoAcademico: ['', Validators.required],
    direccion: ['', Validators.required],
    estadoCivil: ['', Validators.required],
    nacimiento: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private colaboradorService: ColaboradoresService, private router: Router) { }

  ngOnInit(): void {
  }

  campoNoValido(campo: string): boolean {
    if (this.colaboradorForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }


  addWorker() {
    this.formSubmitted = true;

    if (this.colaboradorForm.invalid) {
      return;
    } else {
      this.colaboradorService.addWorker(this.colaboradorForm.value).subscribe(res => {

        this.router.navigateByUrl('/colaboradores');
      }, (error) => {
        console.log(error);
      });
    }
  }


}
