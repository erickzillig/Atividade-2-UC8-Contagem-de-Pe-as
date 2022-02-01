var ListadePeça = ["filtro de ar","amortecedor", "motor"]

if (ListadePeça.length < 10) {
    // É possivel cadastrar
    console.log ("É possivel cadastrar mais  peças")
    // Se não aparecer essa mensagem
} else {
    console.log ("Não tem mais espaço na lista")
}

let peso = 50;
if(peso<100){
    console.log ("A peça deve pesar no minimo 100g")
} else {
    console.log ("A peça possui peso adequado")
}

let nomePeça ="Disco de Freio"
if(nomePeça.length>3){
    console.log ("O nome está adequado")
} else {
    console.log ( "nome deve ter mais de 3 caractere, digite um novo nome") 
}
    