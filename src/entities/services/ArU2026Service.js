export class ArU2026Service {

    async verificarInstitucion(dni){

        const respuesta = await fetch(`URL_DE_LA_API/${dni}`)

        if(!respuesta.ok){
            throw new Error("Error al consultar ArU2026")
        }

        const datos = await respuesta.json()

        return datos
    }
}