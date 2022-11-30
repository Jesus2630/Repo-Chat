class Personas {

    constructor(){
        this.personas = [];
    }

    //Agrego una persona
    agregarPersona(id,nombre){
        let persona = {id,nombre}

        this.personas.push(persona)
        return this.personas;
    }

    getPersona(id){
        let persona = this.personas.filter(persona =>{
            return persona.id === id
        })[0];

        return persona;
    }

    getPersonas(){
        return this.personas;
    }

    getBorrarPersona(id){
        let personaBorrada = this.getPersona(id)

        this.personas.filter(persona =>{
            return persona.id != persona
        })

        return personaBorrada;
    }
}

const nuevoUsuario = new Personas();

nuevoUsuario.agregarPersona(1232,'Jesus');
nuevoUsuario.agregarPersona(3232,'Marcos');
nuevoUsuario.agregarPersona(333,'Lucas');

console.log(nuevoUsuario.getPersona(333))
