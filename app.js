// Atualiza o ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Função principal do jogo
function jogarDados() {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelectorAll('img')[0]
    .setAttribute('src', `./img/dice${dado1}.png`);
  document
    .querySelectorAll('img')[1]
    .setAttribute('src', `./img/dice${dado2}.png`);

  const titulo = document.querySelector('h1');
  if (dado1 > dado2) {
    titulo.textContent = '🎉 Jogador 1 Venceu!';
  } else if (dado2 > dado1) {
    titulo.textContent = '🎉 Jogador 2 Venceu!';
  } else {
    titulo.textContent = '🤝 Empate!';
  }
}

// Executa ao carregar a página
window.onload = jogarDados;

// Executa ao clicar no botão
document.getElementById('btn-jogar').addEventListener('click', jogarDados);
