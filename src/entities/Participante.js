export class Participante{
    nombre
    apellido
    edad
    mail
    dni
    medioDeContacto
    entidadAcademica
    carrera
    categoria
    referencia
    participanteReferidos = []
    historialAcademico
    
    esAhk(){
    return this.entidadAcademica == "AHK"}

    referidoAParticipante(){
    return this.participanteReferidos.lenght()
    }

    chancesAcumuladas(){
     let puntos = 0
        this.historialAcademico.materias.forEach(materia => {
            if (materia.aprobadoConFinal){
                puntos += 0,5
            }
            else if (materia.abrobadoSinFinal){
                puntos += 0,5
            }
            if (materia.nota >= 4){
            puntos += (materia.nota * 0,5)
             }
        });
        this.participanteReferidos.entidadAcademica.forEach(entidad => {
        if(entidad == "AHK"){
        puntos += 2}
        else if(entidad != null){
        puntos += 1
        }
        else {
        puntos += 0,5
        }
    });
    return puntos
    }   
}