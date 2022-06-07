function verificar() {
    /*window.alert("FUNCIONOU!");*/
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById("txtano");
    var res = window.document.querySelector("div#res");
    /**
     * pode ser assim também - || fano.value > ano
     */
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        window.alert("Tudo OK");
    }
}