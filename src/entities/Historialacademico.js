export class Historialacademico{
    carrera
    materias = []

    cantMateriasAlumnoAhk(){
        let cantMateriasCursadas = 0
        let cantMateriasAprobadas = 0

            this.materias.forEach(materia => {
                if (materia.aprobadaSinFinal){
                cantMateriasCursadas += 1
                }   
                else if (materia.aprobadaConFinal || materia.promocionada){
                    cantMateriasAprobadas += 1
                }
            })
        return { materiasCursadas: cantMateriasCursadas, materiasAprobadas: cantMateriasAprobadas }
    }
        

}
