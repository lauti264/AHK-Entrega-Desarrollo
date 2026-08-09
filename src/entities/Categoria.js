export class Categoria{
    tipo     
    multiplicador(){
        let multi = 0
        if(this.tipo == "oro"){
            multi = 5
        }
        else if (this.tipo == "plata"){
            multi = 3
        }
        else if (this.tipo == "bronce"){
            multi = 2
        }
        return multi
    }

    

cantParticipantes(){}    
}

 