import { Injectable } from '@angular/core';
import { Charla } from '../models/charla';

@Injectable({
  providedIn: 'root'
})
export class CharlasService {
  private charlas: Charla[] = [];


  constructor() {}

  obtenerCharlas(): Charla[] {
    return this.charlas;
  }

  obtenerCharlaPorId(id: string): Charla | undefined {
    return this.charlas.find(c=> c.id === id);
  }

  agregarCharla(charla: Charla) {
    this.charlas.push(charla);
  }


}
