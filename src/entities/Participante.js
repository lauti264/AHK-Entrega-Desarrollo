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
    fechaInscripcion = new Date()
    ascendioPorReferidos = false

    
    esAhk(){
    return this.entidadAcademica == "AHK"}

    referidoAParticipante(){
    return this.participanteReferidos.length
    }

    chancesAcumuladas(){
     let puntos = 0

        if(this.entidadAcademica == "AHK"){
        this.historialAcademico.materias.forEach(materia => {
            if (materia.aprobadoConFinal || materia.promocionada){
                puntos += (materia.nota * 0.5)
            }
            else if (materia.aprobadoSinFinal){
                puntos += 0.5
            }
        });
            
        this.participanteReferidos.forEach(referencia => {
            if(referencia.entidadAcademica == "AHK"){
            puntos += 2}
            else if(referencia.entidadAcademica != null){
            puntos += 1
            }
            else {
            puntos += 0.5
            }
            });
        }
        else{
            this.participanteReferidos.forEach(referencia => {
            if(referencia.entidadAcademica == "AHK"){
            puntos += 1
            }
           
            });
        }

        puntos = puntos * this.categoria.multiplicador()

        return puntos
    }

    actualizarListaReferidos(){
        if(this.participanteReferidos.length >= 200 && this.categoria.tipo != "oro"){
            this.categoria.tipo = "oro"
            this.ascendidoPorReferidos = true
        }
        else if (this.participanteReferidos.length >= 50 && this.categoria.tipo == "bronce"){
            this.categoria.tipo = "plata"
            this.ascendidoPorReferidos = true
        }
    }

    
 }