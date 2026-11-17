
export class Digimon{
    constructor(name, level){
        this.name = name;
        this.level = level;
    }

    digievolucion(){
        console.log(this.name + " evoluciono a " + this.name + " GT");
    }
}

//export {Digimon};