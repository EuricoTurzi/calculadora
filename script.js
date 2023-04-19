function calcular() {
    var valorFabricado = parseFloat(document.getElementById("valor").value);
    var porcentagemLucro = parseFloat(document.getElementById("porcentagem").value);
    var qtdSolventes = Math.ceil(valorFabricado / 10000 * 5);
    var qtdPapelMoeda = Math.ceil(valorFabricado / 10000 * 1);
    var valorPapelMoeda = qtdPapelMoeda * 500;
    var lucro = valorFabricado * porcentagemLucro / 100 - valorPapelMoeda;
    var valorCliente = valorFabricado * (100 - porcentagemLucro) / 100;
    document.getElementById("solventes").value = qtdSolventes;
    document.getElementById("qtdPapelMoeda").textContent = qtdPapelMoeda;
    document.getElementById("valorPapelMoeda").textContent = " (Total de: " + valorPapelMoeda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + ")";
    document.getElementById("lucro").value = lucro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById("cliente").value = valorCliente.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}