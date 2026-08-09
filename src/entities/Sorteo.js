export class Sorteo{
participantes = []
referidos = []


    cantParticipantesPorCategoria(){
    let cantOro = 0
    let cantPlata = 0
    let cantBronce = 0

    this.participantes.forEach(participante =>{
        if(participante.categoria.tipo == "oro"){
            cantOro += 1
        }
        else if(participante.categoria.tipo == "plata"){
            cantPlata += 1
        }
        else if(participante.categoria.tipo == "bronce"){
            cantBronce += 1
        }
    })

    return { oro: cantOro, plata: cantPlata, bronce: cantBronce }
    }

    participantesConMasChances(){ 
        let masChances = 0
        let mayorParticipante = null
        this.participantes.forEach(participante => {
            if(participante.chancesAcumuladas() > masChances){
                masChances = participante.chancesAcumuladas()
                mayorParticipante = participante
            }
        
        } )
        return mayorParticipante
    }

    cantReferidosAceptados(fechaInicio, fechaFin){
        let cantReferidos = 0
        this.referidos.forEach(referido =>{
            if(referido.fechaDeAceptacion >= fechaInicio && referido.fechaDeAceptacion <= fechaFin){
                cantReferidos += 1
            }

        })
        return cantReferidos
    }

    cantParticipantesPorInstucion(){
        let cantAhk = 0
        let cantFacu = 0
        let cantNinguna = 0

        this.participantes.forEach(participante => {
            if(participante.entidadAcademica == "AHK"){
                cantAhk += 1
            }
            else if(participante.entidadAcademica == null){
                cantNinguna += 1
            }
            else{
                cantFacu += 1
            }
            })
            return { AHK: cantAhk, Facultad: cantFacu, Ninguna: cantNinguna }
        }
        
    promedioDeChancesPorCategoria(tipoCategoria){
        let chancesPromedio = 0
        let cantParticipantes = 0
        
        this.participantes.forEach(participante =>{
            if(participante.categoria.tipo == tipoCategoria){
                chancesPromedio += participante.chancesAcumuladas()
                cantParticipantes += 1
            }
        })
        return  chancesPromedio / cantParticipantes

    }
    inscripcionesPorDias(){
        let inscripcionesPorDias = {}

        this.participantes.forEach(participante =>{
            let fecha = participante.fechaInscripcion.toLocaleDateString()
            if(inscripcionesPorDias[fecha]){
                inscripcionesPorDias[fecha] += 1
            }
            else{
                inscripcionesPorDias[fecha] = 1
            }
        })
        return inscripcionesPorDias
    }

    cantDeParticipantesQueAscendieron(){
        let cantAscendidos = 0
        this.participantes.forEach(participante =>{
            if(participante.ascendidoPorReferidos){
                cantAscendidos += 1
            }
        }) 
        return cantAscendidos
    }
}

   