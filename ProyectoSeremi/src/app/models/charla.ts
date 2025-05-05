import { Actividad } from "./actividad";
import { Usuario } from "./Usuario";

export interface Charla {
    id: string,
    fecha: Date,
    establecimiento: string,
    region: string,
    comuna: string,
    curso: string,
    asistenciaTotal: number,
    asistenciaHombres: number,
    asistenciaMujeres: number,
    temario: string,
    oradores: Usuario[],
    actividades: Actividad[],
}