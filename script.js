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
        /*window.alert("Tudo OK");*/
        var fsex = window.document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        /*res.innerHTML = `Idade calculada ${idade}`;*/
        var genero = "";
        if (fsex[0].checked) {
            genero = "Homem";
        } else if (fsex[1].checked) {
            genero = "Mulher";
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    }
}