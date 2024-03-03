

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar!";
    console.log(document.getElementById("agradecimento"));

}

function redirecionar(){
    window.open("https://www.google.com.br/");
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada!";
    //alert("BUU!! 👻👻");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui :)";
}

function load(){
    alert("Página carregada!")
}

function change(elemento){
    console.log(elemento.value)
}

/*
var d = new Date();
console.log(d);
console.log(d.getDay());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <=5){
    console.log (count);
    count++;
}
*/

/*
var idade = prompt("Qual é a sua idade?");
if (idade >= 18)
    alert ("Maior de idade.")
else
    alert ("Menor de idade.")
*/

/*
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
*/

/*
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta);
*/

//var lista = ["maçã", "pêra", "morango"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString())
//console.log(lista.join(" - "));