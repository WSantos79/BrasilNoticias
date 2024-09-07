(function(_0x5d5a8b,_0x26aaf7){const _0xda32be=_0x5464,_0x5651ff=_0x5d5a8b();while(!![]){try{const _0x5cff05=-parseInt(_0xda32be(0x1bd))/0x1+-parseInt(_0xda32be(0x1c1))/0x2+parseInt(_0xda32be(0x1c3))/0x3+parseInt(_0xda32be(0x1bc))/0x4*(parseInt(_0xda32be(0x1bb))/0x5)+-parseInt(_0xda32be(0x1be))/0x6+-parseInt(_0xda32be(0x1c0))/0x7*(-parseInt(_0xda32be(0x1bf))/0x8)+parseInt(_0xda32be(0x1c2))/0x9;if(_0x5cff05===_0x26aaf7)break;else _0x5651ff['push'](_0x5651ff['shift']());}catch(_0x5e8438){_0x5651ff['push'](_0x5651ff['shift']());}}}(_0x216b,0xe35fc));function _0x5464(_0x92bafc,_0x3b3507){const _0x216b53=_0x216b();return _0x5464=function(_0x54643d,_0x4ae2b3){_0x54643d=_0x54643d-0x1bb;let _0x3e1583=_0x216b53[_0x54643d];return _0x3e1583;},_0x5464(_0x92bafc,_0x3b3507);}function _0x216b(){const _0x4f432b=['2156364ycSUCo','7625853riaogp','4599000QwfGqr','89290dKVSZP','316irAJWe','361893oNXeUE','9559722IhytiZ','136OOeojr','71477aLUSVq'];_0x216b=function(){return _0x4f432b;};return _0x216b();}const apiKey='edc56c36f2444ae0b92bbf2b618a7d43';

const url = `https://newsapi.org/v2/top-headlines?sources=globo,blasting-news-br,info-money&apiKey=${apiKey}`;

/*axios.get(url, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Upgrade': 'HTTP/1.1'
  }
  })
  .then(response => {
    const articles = response.data.articles;

    if (articles && articles.length > 0) {      
      console.log(articles)
        // Limita a exibição a 15 artigos e envia para a função de exibição
        adicionarElementosNaPagina(articles.slice(0, 15));
      
    } else {
      console.error('Nenhum artigo foi retornado pela API.');
    }
  })
  .catch(error => {
    console.error('Erro ao buscar notícias:', error);
  });
*/

fetch(url, {
  method: 'GET',
  headers: {
   
   
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao buscar notícias: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const articles = data.articles;

    if (articles && articles.length > 0) {
      console.log(articles);
      // Limita a exibição a 15 artigos e envia para a função de exibição
      adicionarElementosNaPagina(articles.slice(0, 15));
    } else {
      console.error('Nenhum artigo foi retornado pela API.');
    }
  })
  .catch(error => {
    console.error('Erro ao buscar notícias:', error);
  });



// Função para buscar notícias
async function pesquisar() {    
  const palavraDaBusca = document.getElementById('searchInput').value;
  const url = `https://newsapi.org/v2/everything?q=${palavraDaBusca}&sortBy=publishedAt&language=pt&apiKey=${apiKey}`;
  
  if (!palavraDaBusca){
    exibirMensagemErro();    
    return
  }

  try {
      const response = await fetch(url);
      
      // Verifica se a resposta foi bem-sucedida (status 200)
      if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      // Verifica se há artigos na resposta
      if (data.articles && data.articles.length > 0) {
          console.log('Número total de artigos:', data.articles.length);
          console.log(data.articles)
          // Limpa os resultados anteriores
          limparResultados();

          // Ordena os resultados por data e exibe os primeiros 15 artigos
          const sortedArticles = data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
          adicionarElementosNaPagina(sortedArticles.slice(0, 15), palavraDaBusca);

          // Criar paginação para o restante dos elementos
          criarPaginacao(sortedArticles, palavraDaBusca, 1); // Página inicial = 1
      } else {
          exibirMensagemNenhumResultado();
      }
  } catch (error) {
      console.error('Erro ao buscar notícias:', error.message);
      exibirMensagemErro();
  }
}



// Função para limpar os resultados antigos da tela
function limparResultados() {
  const resultadosPesquisa = document.querySelector('.resultados-pesquisa');
  if (resultadosPesquisa) {
    resultadosPesquisa.innerHTML = ''; // Limpa os resultados antigos
}  
 // const paginacaoContainer = document.querySelector('.paginacao-container');
 // if (paginacaoContainer) paginacaoContainer.innerHTML = ''; // Limpa a paginação
}

// Função para exibir uma mensagem quando não houver resultados
function exibirMensagemNenhumResultado() {
  const resultadosPesquisa = document.querySelector('.resultados-pesquisa');
  const mensagem = document.createElement('p');
  mensagem.textContent = 'Nenhuma notícia encontrada.';
  resultadosPesquisa.appendChild(mensagem);
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
    console.log(article)

    // Verefica se há descrição e titulo, afim de evitar erro, e verefica se o artigo exista antes de criar
    if (article.title && article.description && article.title !== '[Removed]' && article.description !== '[Removed]') { 
      const itemResultado = document.createElement('div');
      itemResultado.classList.add('item-resultado');

      // Título da notícia com destaque no termo pesquisado
      const title = document.createElement('h2');
      title.innerHTML = highlightTerm(article.title, palavraDaBusca);
      itemResultado.appendChild(title);

      // Verifica se há descrição e só exibe se houver e adiciona destaque no termo pesquisado
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