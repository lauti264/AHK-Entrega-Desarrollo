import { Referencia } from "./Referencia"

export class Referencia{
    link
    fechaDeAceptacion
    participanteCreador
    participanteReferido
    email
    dni
    sistComunicacion
    
    nuevoParticipante(){
        participante = new Participante
        this.participanteReferido = participante
        this.participanteCreador.participanteReferidos.push(this.participanteReferido)
    }
}