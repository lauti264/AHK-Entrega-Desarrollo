import "dotenv/config"

import { MailService } from "./src/entities/services/MailService.js"
import { Participante } from "./src/entities/Participante.js"
import { Categoria } from "./src/entities/Categoria.js"
import { Historialacademico } from "./src/entities/Historialacademico.js"
import { Referencia } from "./src/entities/Referencia.js"
import { Sorteo } from "./src/entities/Sorteo.js"

function crearCategoria(tipo) {
    const categoria = new Categoria()
    categoria.tipo = tipo
    return categoria
}

const sorteo = new Sorteo()

const juan = new Participante()

juan.nombre = "Juan"
juan.apellido = "Perez"
juan.edad = 22
juan.mail = process.env.MAIL_USER
juan.dni = "11111111"
juan.medioDeContacto = ["email"]
juan.entidadAcademica = "AHK"
juan.carrera = "Data Science"
juan.categoria = crearCategoria("bronce")
juan.fechaInscripcion = new Date("2026-08-01T10:00:00")

const historialJuan = new Historialacademico()

historialJuan.carrera = "Data Science"

historialJuan.materias = [
    {
        nombre: "Programacion",
        aprobadoConFinal: true,
        aprobadoSinFinal: false,
        promocionada: false,
        nota: 8
    },
    {
        nombre: "Base de Datos",
        aprobadoConFinal: false,
        aprobadoSinFinal: true,
        promocionada: false,
        nota: null
    },
    {
        nombre: "Estadistica",
        aprobadoConFinal: false,
        aprobadoSinFinal: false,
        promocionada: true,
        nota: 9
    }
]

juan.historialAcademico = historialJuan

const ana = new Participante()

ana.nombre = "Ana"
ana.apellido = "Lopez"
ana.edad = 24
ana.mail = "ana@test.com"
ana.dni = "22222222"
ana.medioDeContacto = ["email"]
ana.entidadAcademica = "UTN"
ana.carrera = "Ingenieria"
ana.categoria = crearCategoria("plata")
ana.fechaInscripcion = new Date("2026-08-01T15:00:00")

const pedro = new Participante()

pedro.nombre = "Pedro"
pedro.apellido = "Gomez"
pedro.edad = 25
pedro.mail = "pedro@test.com"
pedro.dni = "33333333"
pedro.medioDeContacto = ["email"]
pedro.entidadAcademica = null
pedro.categoria = crearCategoria("bronce")
pedro.fechaInscripcion = new Date("2026-08-02T12:00:00")

sorteo.participantes.push(juan)
sorteo.participantes.push(ana)
sorteo.participantes.push(pedro)

juan.participanteReferidos.push(ana)
juan.participanteReferidos.push(pedro)

const referencia1 = new Referencia()

referencia1.participanteCreador = juan
referencia1.participanteReferido = ana
referencia1.fechaDeAceptacion = new Date("2026-08-03T10:00:00")

const referencia2 = new Referencia()

referencia2.participanteCreador = juan
referencia2.participanteReferido = pedro
referencia2.fechaDeAceptacion = new Date("2026-08-05T10:00:00")

sorteo.referidos.push(referencia1)
sorteo.referidos.push(referencia2)

console.log(
    "Referidos convertidos por Juan:",
    juan.referidoAParticipante()
)

console.log(
    "Chances de Juan:",
    juan.chancesAcumuladas()
)

console.log(
    "Chances de Ana:",
    ana.chancesAcumuladas()
)

console.log(
    "Chances de Pedro:",
    pedro.chancesAcumuladas()
)

console.log(
    sorteo.cantParticipantesPorCategoria()
)

const mayor = sorteo.participantesConMasChances()

console.log(
    "Participante con más chances:",
    mayor.nombre,
    mayor.apellido,
    "- Chances:",
    mayor.chancesAcumuladas()
)

const fechaInicio = new Date("2026-08-01T00:00:00")
const fechaFin = new Date("2026-08-04T23:59:59")

console.log(
    "Referidos aceptados entre las fechas:",
    sorteo.cantReferidosAceptados(fechaInicio, fechaFin)
)

console.log(
    sorteo.cantParticipantesPorInstucion()
)

console.log(
    "Promedio Bronce:",
    sorteo.promedioDeChancesPorCategoria("bronce")
)

console.log(
    "Promedio Plata:",
    sorteo.promedioDeChancesPorCategoria("plata")
)

console.log(
    juan.historialAcademico.cantMateriasAlumnoAhk()
)

console.log(
    sorteo.inscripcionesPorDias()
)

const lucas = new Participante()

lucas.nombre = "Lucas"
lucas.apellido = "Prueba"
lucas.entidadAcademica = "UTN"
lucas.categoria = crearCategoria("bronce")

for (let i = 0; i < 50; i++) {
    const referido = new Participante()

    referido.nombre = `Referido ${i + 1}`
    referido.entidadAcademica = "UTN"

    lucas.participanteReferidos.push(referido)
}

console.log(
    "Categoría antes:",
    lucas.categoria.tipo
)

lucas.actualizarListaReferidos()

console.log(
    "Categoría después:",
    lucas.categoria.tipo
)

console.log(
    "Ascendió por referidos:",
    lucas.ascendioPorReferidos
)

sorteo.participantes.push(lucas)

console.log(
    "Cantidad total que ascendieron:",
    sorteo.cantDeParticipantesQueAscendieron()
)

const referenciaMail = new Referencia()

referenciaMail.participanteCreador = juan
referenciaMail.email = "test@gmail.com"
referenciaMail.dni = "11111111"

try {
    await referenciaMail.nuevoParticipante()

    console.log("El referido fue convertido en participante")
    console.log("Mail enviado a:", juan.mail)
}
catch (error) {
    console.log("ERROR:")
    console.log(error.message)
}

const mailService = new MailService()

const destinatario = "lautaro.valle.w@gmail.com"

try {
    await mailService.enviarMail(
        destinatario,
        "Hola, este es un mail de prueba del proyecto AHK"
    )

    console.log("Mail enviado correctamente a:", destinatario)
}
catch (error) {
    console.log("Error al enviar mail:", error.message)
}