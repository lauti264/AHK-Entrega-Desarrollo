import nodemailer from "nodemailer"

export class MailService {

    constructor(){
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })
    }

    async enviarMail(destinatario, mensaje){
        await this.transporter.sendMail({
            from: process.env.MAIL_USER,
            to: destinatario, //Completar// 
            subject: "AHK te lleva al Mundial",
            text: mensaje //Completar//
        })
    }
}