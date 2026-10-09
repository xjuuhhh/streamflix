// Função simples para filtrar entre Séries e Filmes
function filtrar(tipo) {
  // Pega todos os cards do catálogo
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // Se escolheu 'todos', mostra tudo
    if (tipo === 'todos') {
      card.style.display = 'block';
    } 
    // Se o card contém a classe que foi clicada (serie ou filme), mostra ele
    else if (card.classList.contains(tipo)) {
      card.style.display = 'block';
    } 
    // Caso contrário, esconde o card
    else {
      card.style.display = 'none';
    }
  });
}