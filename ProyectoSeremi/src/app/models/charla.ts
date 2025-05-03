export interface Charla {

    fecha: Date,
    establecimiento: string,
    region: string,
    comuna: string,
    curso: string,
    asistenciaHombres: number,
    asistenciaMujeres: number,
    temario: [] string,
    oradores: [] Usuario,
    horaInicio: string,
    horaFin: string
}