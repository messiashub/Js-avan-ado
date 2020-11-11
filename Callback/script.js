
let usuarios = ["Adriano","Nei","Silvia"];

function inserirUsuario(nome,callback){
    setTimeout(() =>{
        usuarios.push(nome);
        callback();
    },3000);

}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Igor",listarUsuarios);


