
function falarGenerico(){
    console.log(this.som)
}

let cachorro={
    som:"Au Au",
    fale:falarGenerico,
}

let gato= {
    som:"Miau Miau",
    fale: falarGenerico,
    
}

let passarinho={
    som:"Piu Piu",
    fale: falarGenerico,
}
cachorro.fale();
gato.fale();
passarinho.fale();

// ou 

let bindFunction = falarGenerico.bind(passarinho);

bindFunction();