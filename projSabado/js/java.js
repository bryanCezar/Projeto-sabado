function pegarValor(){
  const nomeProd = document.getElementById("produto");
  const valorOrig = document.getElementById("valor");
  const desconto = document.getElementById("percento");
  calcular(nomeProd.value, valorOrig.value, desconto.value);
}

function calcular(nome, val, perc){
  const valorDesconto =  (val * perc) / 100;
  const valorFin = val - valorDesconto;
  const produtoResposta = document.getElementById("produtoRes");
  produtoResposta.value = nome;
  const valorResposta = document.getElementById("valorDes");
  valorResposta.value = val;
  const valorFinalRes = document.getElementById("valorFinal");
  valorFinalRes.value = valorFin;
}
function reiniciar(){
  document.getElementById("produto").value = null;
  document.getElementById("valor").value = null;
  document.getElementById("percento").value = null;
  document.getElementById("produtoRes").value = null;
  document.getElementById("valorDes").value = null;
  document.getElementById("valorFinal").value = null;
 }