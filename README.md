# Notícias Brasil

## :heavy_check_mark: Descrição

Bem-vindo ao **Notícias Brasil**, um site que permite aos usuários explorar e buscar notícias de forma rápida e prática. Com uma interface simples e intuitiva, o projeto oferece a possibilidade de filtrar notícias por palavras-chave e visualizar os resultados com paginação, além de destacar o termo pesquisado nos títulos e descrições.

Este projeto é um site de notícias desenvolvido durante a **Imersão Alura + Gemini**, uma iniciativa que visa capacitar desenvolvedores em tecnologias de ponta. Através deste projeto, foi possível aplicar os conhecimentos adquiridos na imersão para criar uma aplicação web funcional e eficiente.

## Funcionalidades

- **Busca Personalizada:** Os usuários podem digitar um termo de busca e receber resultados relevantes com notícias recentes sobre o tópico pesquisado.
- **Destaque de Termos:** O termo de busca inserido pelo usuário é destacado nos títulos e descrições das notícias exibidas.
- **Paginação Dinâmica:** A lista de resultados é paginada para melhorar a experiência do usuário, exibindo até 15 artigos por página.
- **Leitura Completa das Notícias**: Cada notícia possui um link para acessar o artigo completo em uma nova aba.
- **Mensagens de Erro**: Exibe uma mensagem quando não há correspondências para a busca realizada.
- **Imagens nas Notícias**: Caso disponível, exibe a imagem associada à notícia.
- **Layout Responsivo:** O layout é adaptável a diferentes tamanhos de tela, garantindo uma boa experiência tanto em desktops quanto em dispositivos móveis.
- **Visual Limpo e Intuitivo:** O design da página segue uma estética limpa, com foco na legibilidade e facilidade de uso.

## :hammer: Tecnologias Utilizadas

- **HTML5:** Utilizado para estruturar o conteúdo da página.
- **CSS3:** Para estilização e responsividade do layout.
- **JavaScript (ES6+):** Para adicionar interatividade, realizar requisições à API e manipular o DOM.
- **DOM (Document Object Model):** Interface de programação para documentos HTML, utilizada para manipular elementos da página e exibir os resultados da busca.
- **Regular Expressions:** Utilizadas para destacar os termos pesquisados no texto.
- **Vercel:** A plataforma de hospedagem utilizada para o deploy da aplicação.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

- **index.html**: Estrutura da página e elementos HTML.
- **style.css**: Estilos e layout da página.
- **app.js**: Código JavaScript responsável pela busca, paginação e manipulação de dados.
- **dados.js**: Arquivo com os dados das notícias (mock de uma API).

## :game_die: Como Usar

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/WSantos79/Noticias-Brasil.git

2. **Rodando o Projeto Localmente:**

    Basta abrir o arquivo index.html no seu navegador para utilizar o projeto.
   
3. **Pesquisar por Notícias**:
   - Insira um termo no campo de busca.
   - Clique no botão **Pesquisar** para ver os resultados.

4. **Paginação**:
   - Use os botões de paginação no topo ou na base da página para navegar entre os resultados.

5. **Deploy:**

    O projeto está hospedado na Vercel e pode ser acessado no seguinte link: [Notícias Brasil](https://noticias-brasil-delta.vercel.app/ "target=_blank" rel="noopener noreferrer")

## Estrutura de Código

Abaixo estão algumas das principais funções no arquivo `app.js`:

- **carregarNoticias**: Carrega os dados das notícias e formata-os.
- **pesquisar**: Filtra os artigos pela palavra-chave inserida pelo usuário.
- **limparResultados**: Limpa os resultados da pesquisa anterior.
- **exibirMensagemErro**: Exibe uma mensagem de erro quando não há resultados.
- **adicionarElementosNaPagina**: Adiciona os artigos filtrados na página.
- **criarPaginacao**: Gera a paginação para os resultados da pesquisa.
- **highlightTerm**: Destaca o termo pesquisado nos títulos e descrições.

## Melhorias Futuras

- Integração com uma API de notícias em tempo real.
- Implementação de filtros por data ou categoria.
- Melhorar o design responsivo e a acessibilidade.
- Adicionar suporte para múltiplos idiomas.
    
## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou submeter um pull request.
Siga os seguintes passos:

1. Faça um **fork** do repositório.
2. Crie uma nova **branch**:
   bash
   git checkout -b feature/nova-funcionalidade
   
3. Faça suas alterações e faça o **commit**:
   bash
   git commit -m "Adiciona nova funcionalidade"
   
4. Faça o **push** para a branch:
   bash
   git push origin feature/nova-funcionalidade
   
5. Abra um **pull request**.

## Licença
Este projeto está licenciado sob a Apache-2.0 license.

## :smiley: Contato

## <a href="https://github.com/WSantos79">Wellington Santos 🚀</a>

[![Linkedin Badge](https://img.shields.io/badge/-WellingtonSantos79-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wellingtonsantos79/)](https://www.linkedin.com/in/wellingtonsantos79/) 
[![Gmail Badge](https://img.shields.io/badge/-WellingtonSantos7799@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wellingtonsantos7799@gmail.com)](mailto:wellingtonsantos7799@gmail.com)

© 2024 Notícias Brasil. Todos os direitos reservados.
