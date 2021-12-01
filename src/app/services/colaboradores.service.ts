import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

import { colaboradores } from '../interfaces/colaboradores.interface';
import { colaborador } from '../interfaces/colaborador.interface';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor(private http: HttpClient, private router: Router) { }

  public url = "http://localhost:3001/api/colaboradores";

  getWorkers() {
    return this.http.get<colaboradores>(this.url);
  }





  getWorker(id: string) {
    return this.http.get<colaborador>(`${this.url}/${id}`);
  }






  addWorker(formData: colaboradores) {

    return this.http.post(this.url, formData);
  }




  updateWorker(id: string, colaboradorForm: any) {

    return this.http.put(`${this.url}/${id}`, colaboradorForm);

  }




  deleteWorker(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }



}
