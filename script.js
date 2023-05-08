// function calcular() {
//     var valorFabricado = parseFloat(document.getElementById("valor").value);
//     var porcentagemLucro = parseFloat(document.getElementById("porcentagem").value);
//     var qtdSolventes = Math.ceil(valorFabricado / 10000 * 5);
//     var qtdPapelMoeda = Math.ceil(valorFabricado / 10000 * 1);
//     var valorPapelMoeda = qtdPapelMoeda * 500;
//     var lucro = valorFabricado * porcentagemLucro / 100 - valorPapelMoeda;
//     var valorCliente = valorFabricado * (100 - porcentagemLucro) / 100;
//     document.getElementById("solventes").value = qtdSolventes;
//     document.getElementById("qtdPapelMoeda").textContent = qtdPapelMoeda;
//     document.getElementById("valorPapelMoeda").textContent = " (Total de: " + valorPapelMoeda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + ")";
//     document.getElementById("lucro").value = lucro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
//     document.getElementById("cliente").value = valorCliente.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
//     // Cria o relatório em HTML
//     var nome = document.getElementById("nome").value;
//     var dinheiroSujo = document.getElementById("valor").value;
//     var dinheiroLimpoCliente = document.getElementById("cliente").value;
//     var dinheiroLimpoNos = document.getElementById("lucro").value;
//     var porcentagem = document.getElementById("porcentagem").value;

//     var relatorioHTML = "<h2>Relatório</h2>";
//     relatorioHTML += "<p><strong>Nome:</strong> " + nome + "</p>";
//     relatorioHTML += "<p><strong>Dinheiro Sujo:</strong> " + dinheiroSujo + "</p>";
//     relatorioHTML += "<p><strong>Dinheiro Limpo para o cliente:</strong> " + dinheiroLimpoCliente + "</p>";
//     relatorioHTML += "<p><strong>Dinheiro Limpo para nós:</strong> " + dinheiroLimpoNos + "</p>";
//     relatorioHTML += "<p><strong>Porcentagem:</strong> " + porcentagem + "%</p>";

//     var newWindow = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
//     newWindow.document.body.style.backgroundColor = "white";
//     newWindow.document.write(relatorioHTML);
// }


function calcular() {
    var valorFabricado = parseFloat(document.getElementById("valor").value);
    var porcentagemLucro = parseFloat(document.getElementById("porcentagem").value);
    var qtdSolventes = Math.ceil(valorFabricado / 10000 * 5);
    var qtdPapelMoeda = Math.ceil(valorFabricado / 10000);
    var valorPapelMoeda = qtdPapelMoeda * 500;
    var lucro = valorFabricado * porcentagemLucro / 100 - valorPapelMoeda;
    var valorCliente = valorFabricado * (100 - porcentagemLucro) / 100;
    document.getElementById("solventes").value = qtdSolventes;
    document.getElementById("qtdPapelMoeda").textContent = qtdPapelMoeda;
    document.getElementById("valorPapelMoeda").textContent = " (Total de: " + valorPapelMoeda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + ")";
    document.getElementById("lucro").value = lucro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById("cliente").value = valorCliente.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
    var reportText = "Copie e cole no BC Ilegal - #registro-lavagem \n" + "\n" +
        "Nome: \n" +
        "Dinheiro sujo: " + valorFabricado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "\n" +
        "Dinheiro limpo para o cliente: " + valorCliente.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "\n" +
        "Dinheiro limpo para nós: " + lucro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "\n" +
        "Porcentagem: " + porcentagemLucro + "%\n";
  
    var reportWindow = window.open("", "Relatório", "width=600,height=400,top=100,left=100,border-radius=5px;background-color:#fff;padding:10px;");
  
    var closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.style.cssText = "background-color: transparent; color: red; border: none; cursor: pointer; position: absolute; top: 5px; right: 5px; font-size: 24px; font-weight: bold;";
    closeButton.addEventListener("click", function() {
      reportWindow.close();
    });
  
    reportWindow.document.body.style.cssText = "background-color:#fff;padding:10px;";
    reportWindow.document.body.appendChild(closeButton);
    reportWindow.document.write("<pre>" + reportText + "</pre>");
  }