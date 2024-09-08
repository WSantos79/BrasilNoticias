// Carregando
function carregarNoticias() {
  try {
    const articles = noticias;

    if (articles && articles.length > 0) {
      // Limita a exibição a 15 artigos e envia para a função de exibição
      adicionarElementosNaPagina(articles.slice(0, 15));
      
    } else {
      
      exibirMensagemErro()
    }
  } catch (error) {
    exibirMensagemErro()    
  }
}


const input = document.getElementById('searchInput'); 
const botao = document.querySelector('.search-button'); 

// Faz pesquisa quando o usuario aperta a tecla enter sem a necessidade de clicar no botao de pesquisa
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    botao.click();
  }
});

// Função para buscar notícias
async function pesquisar() {    
  const palavraDaBusca = document.getElementById('searchInput').value;
  const msgpesq = document.querySelector('.msg-pesq');
  msgpesq.innerHTML = ""

  if (!palavraDaBusca) {
    exibirMensagemErro();
    return;
  }

  try {
    const data = noticias;  // Usa o arquivo de dados
    
    
    // Filtra os artigos pela palavra-chave
    const artigosFiltrados = data.filter(article => {
      return (
        (article.title && article.title.toLowerCase().includes(palavraDaBusca.toLowerCase())) ||
        (article.description && article.description.toLowerCase().includes(palavraDaBusca.toLowerCase()))
      );
    });
    
    // Verifica se há artigos filtrados
    if (artigosFiltrados.length > 0) {


      // Limpa os resultados anteriores
      limparResultados();

      // Ordena os resultados por data e exibe os primeiros 15 artigos
      const sortedArticles = artigosFiltrados.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      adicionarElementosNaPagina(sortedArticles.slice(0, 15), palavraDaBusca);
      
      // Cria paginação para o restante dos elementos
      criarPaginacao(sortedArticles, palavraDaBusca, 1);
    } else {
      exibirMensagemErro();
    }
  } catch (error) {    
    exibirMensagemErro();
  }
}

// As demais funções continuam iguais, sem alteração:

// Função para limpar os resultados antigos da tela
function limparResultados() {
  const resultadosPesquisa = document.querySelector('.resultados-pesquisa');
  if (resultadosPesquisa) {
    resultadosPesquisa.innerHTML = ''; // Limpa os resultados antigos
  }
}

// Função para exibir uma mensagem de erro na pesquisa
function exibirMensagemErro() {
  const msgpesq = document.querySelector('.msg-pesq');
  msgpesq.innerHTML = "<p>Sua busca não encontrou correspondências.</p>"
}

// Função para adicionar os elementos à página com destaque no termo pesquisado
function adicionarElementosNaPagina(articles, palavraDaBusca) {
  const resultadosPesquisa = document.querySelector('.resultados-pesquisa');
  
  // Itera sobre cada artigo e cria os elementos na página
  articles.forEach(article => {
    // Verifica se há título e descrição antes de tentar acessá-los para evitar erros
    if (article && article.title && article.description) { 
      const itemResultado = document.createElement('div');
      itemResultado.classList.add('item-resultado');

      // Título da notícia com destaque no termo pesquisado
      const title = document.createElement('h2');
      title.innerHTML = highlightTerm(article.title, palavraDaBusca);
      itemResultado.appendChild(title);

      // Verifica se há descrição e só exibe se houver, com destaque no termo pesquisado
      if (article.description) {
          const description = document.createElement('p');
          description.innerHTML = highlightTerm(article.description, palavraDaBusca);
          itemResultado.appendChild(description);
      }

      // Verifica se há imagem e a adiciona
      if (article.urlToImage) {
          const image = document.createElement('img');
          image.src = article.urlToImage;
          image.alt = article.title; // Alt com o título da matéria
          itemResultado.appendChild(image);
      }

      // Botão para ler mais
      const readMore = document.createElement('a');
      readMore.href = article.url;    
      readMore.textContent = 'Leia a matéria completa';
      readMore.classList.add('btn-leia-mais');
      readMore.target = '_blank'; // Abre em nova aba
      itemResultado.appendChild(readMore);

      // Adiciona o item ao container
      resultadosPesquisa.appendChild(itemResultado);
    } else {
      
    }
  });
}


function criarPaginacao(articles, palavraDaBusca, currentPage) {
  const totalPaginas = Math.ceil(articles.length / 15);
  
  // Seleciona os containers de paginação
  const paginacaoContainerTopo = document.querySelector('.paginacao-container-top');
  const paginacaoContainerBase = document.querySelector('.paginacao-container-bottom');

  // Função para gerar os botões de página
  const gerarBotoesPaginacao = (container) => {
      if (!container) return;  // Verifica se o container existe
      
      container.innerHTML = ''; // Limpa botões antigos

      for (let i = 1; i <= totalPaginas; i++) {
          const paginaButton = document.createElement('button');
          paginaButton.textContent = i;
          paginaButton.classList.add('pagina-button');

          // Destaque para a página ativa
          if (i === currentPage) {
              paginaButton.classList.add('pagina-ativa');
          }

          paginaButton.addEventListener('click', () => {
              // Limpa os resultados atuais e exibe a página selecionada
              limparResultados();

              // Calcula o índice de início e fim para os artigos da página atual
              const start = (i - 1) * 15;
              const end = start + 15;
              adicionarElementosNaPagina(articles.slice(start, end), palavraDaBusca);

              // Recria a paginação e destaca o número correto
              criarPaginacao(articles, palavraDaBusca, i); // Repassa a página atual
          });

          container.appendChild(paginaButton);
      }
  };

  // Gera os botões de paginação no topo e na base
  gerarBotoesPaginacao(paginacaoContainerTopo);
  gerarBotoesPaginacao(paginacaoContainerBase);
}

// Função para destacar os termos pesquisados no título e descrição
function highlightTerm(text, term) {
  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

// Chama a função para carregar as notícias ao carregar a página
carregarNoticias();
