/**
 * Created by davi.oliveira on 23/09/16.
 */

var botao = document.getElementById("calcula-imcs");

botao.addEventListener("click", function calculaTodosImcs() {
    var trsPacientes = document.getElementsByClassName("paciente"); // Arrays de trs

    percorreArray(trsPacientes, function (pacienteTr) {

        var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
        var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
        var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

        var pacienteAtual = {
            nome: tdNome.textContent,
            peso: tdPeso.textContent,
            altura: tdAltura.textContent,
            pegaImc: function () {
                if (this.altura != 0) {
                    var imc = this.peso / (this.altura * this.altura);
                    return imc;
                } else {
                    console.log("Não executado porque altura é igual a zero.");
                }
            }
        };

        var imc = pacienteAtual.pegaImc();

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;

        console.log(imc);
    });
});





