function FazerCalculo(){
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let valueF03 = document.getElementById("multi").value;
    let valueF04 = document.getElementById("toler").value;
    let resistencia = parseFloat(valueF01+valueF02)*parseFloat(valueF03);
    let tolerancia = resistencia * valueF04; 

    document.getElementById("resultado").value=resistencia;

    document.getElementById("Tolerancia").value=valueF04;
    let TotMin = tolerancia - resistencia;
    let TotMax = tolerancia + resistencia;
    document.getElementById("ToleMin").value=TotMin;
    document.getElementById("ToleMax").value=TotMax;

    //tolerancia = resistencia * tolerancia
    //toleranciaMax = resistencia + tolerancia
}