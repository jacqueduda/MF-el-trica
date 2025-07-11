 const dicas = [
    "⚡ Desligue o disjuntor ao trocar lâmpadas.",
    "🔌 Nunca sobrecarregue uma tomada com muitos aparelhos.",
    "🧯 Tenha um extintor de incêndio próximo ao quadro de energia.",
    "🛠️ Faça manutenção elétrica regularmente com profissional qualificado.",
    "🚿 Evite usar aparelhos elétricos com as mãos molhadas."
  ];
  
  let indice = 0;
  setInterval(() => {
    indice = (indice + 1) % dicas.length;
    document.getElementById("dica-texto").innerText = dicas[indice];
  }, 5000); // troca a cada 5 segundos