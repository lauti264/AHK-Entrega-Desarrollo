import { Participante } from "./Participante.js"
import { MailService } from "./services/MailService.js"

export class Referencia{
    link
    fechaDeAceptacion
    participanteCreador
    participanteReferido
    email
    dni
    sistComunicacion
    
    async nuevoParticipante(){
    const participante = new Participante()

    this.participanteReferido = participante
    this.participanteCreador.participanteReferidos.push(participante)
    this.fechaDeAceptacion = new Date()

    if(this.participanteCreador.medioDeContacto.includes("email")){
        await this.mailService.enviarMail(
            this.participanteCreador.mail,
            "Uno de tus referidos aceptó la invitación al sorteo."
        )
    }

    return participante
}
    mailService = new MailService()
}