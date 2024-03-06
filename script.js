function FazerCalculo(){
    let faixaL1 = document.getElementById("faixa01").value;
    let FaixaL2 = document.getElementById("faixa02").value;
    let Multiplicador = document.getElementById("multi").value;
    let ToleTabela = document.getElementById("toler").value;
    let resistencia = parseFloat(faixaL1+FaixaL2)*parseFloat(Multiplicador);
    let tolerancia = resistencia * ToleTabela; 

    document.getElementById("resultado").value=resistencia;

    document.getElementById("Tolerancia").value=ToleTabela;
    
    let TotMin = resistencia - tolerancia;
    let TotMax = tolerancia + resistencia;
    document.getElementById("ToleMin").value=TotMin;
    document.getElementById("ToleMax").value=TotMax;

    //tolerancia = resistencia * tolerancia
    //toleranciaMax = resistencia + tolerancia
}
