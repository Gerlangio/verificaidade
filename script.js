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
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                window.alert("É uma criança!");
            } else if (idade < 21) {
                //JOVEM
                window.alert("É um jovem!");
            } else if (idade < 50) {
                //ADULTO
                window.alert("É um adulto!");
            } else {
                //IDOSO
                window.alert("É um idoso!");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                window.alert("É uma criança!");
            } else if (idade < 21) {
                //JOVEM
                window.alert("É uma jovem!");
            } else if (idade < 50) {
                //ADULTO
                window.alert("É uma adulta!");
            } else {
                //IDOSO
                window.alert("É uma idosa!");
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    }
}