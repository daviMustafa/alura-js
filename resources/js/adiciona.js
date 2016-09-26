/**
 * Created by davi.oliveira on 26/09/16.
 */
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(){

    event.preventDefault() // impede o submit e reload da pagina

    var campoNome = document.querySelector("#campo-nome");
    var campoPeso = document.querySelector("#campo-peso");
    var campoAltura = document.querySelector("#campo-altura");

    var pacienteNovo = "<tr class='paciente'>" +
                            "<td class='info-nome'>"+ campoNome.value +"</td>" +
                            "<td class='info-peso'>"+ campoPeso.value +"</td>" +
                            "<td class='info-altura'>"+ campoAltura.value +"</td>" +
                            "<td class='info-imc'></td>" +
                        "</tr>"

    var tabela = document.querySelector("table");
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;

    campoNome.value = "";
    campoPeso.value = "";
    campoAltura.value = "";
});