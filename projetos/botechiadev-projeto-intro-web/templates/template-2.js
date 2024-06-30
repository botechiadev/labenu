  // Definindo os elementos do DOM
  const headerHTML = document.querySelector('.ctn-A');
  const mainHTML = document.querySelector('.ctn-B');
  const footerHTML = document.querySelector('.ctn-C');

  const inputHTML = document.getElementById('headerSearch');
  const searchFormHtml = document.getElementById("searchForm");

  // Função para listar produtos
  function listarProdutos(produtos) {
      // Seleciona o elemento do DOM onde os produtos serão exibidos
      const produtosContainer = document.getElementById('productsContainer');
      // Limpa o conteúdo atual do container
      produtosContainer.innerHTML = '';

      if (produtos.length === 0) {
          produtosContainer.innerHTML = '<p>Nenhum Produto Encontrado</p>';
          return;
      }

      // Itera sobre a lista de produtos e cria os elementos HTML para cada produto
      produtos.forEach(produto => {
          // Cria o elemento do produto
          const produtoElement = document.createElement('div');
          produtoElement.classList.add('produto');

          // Cria o HTML do produto
          produtoElement.innerHTML = `
            <article id="${produto.id}" class="cardArticle">
              <div class="produto-img">
                  <img src="${produto.imgUrl}" alt="${produto.nome}">
              </div>
              <div class="produto-info">
                  <h2 class="produto-nome">${produto.nome}</h2>
                  <p class="produto-descricao">${produto.descricao}</p>
                  <p class="produto-preco">R$ ${produto.preco.toFixed(2)}</p>
              </div>
              </article>
          `;

          // Adiciona o produto ao container
          produtosContainer.appendChild(produtoElement);
      });
  }

  // Event listener para o formulário de busca
  searchFormHtml.addEventListener('submit', (e) => {
      e.preventDefault(); // Impede o envio do formulário
      const searchTerm = inputHTML.value.toUpperCase();
      const filteredProducts = mercadinho.filter(item => item.nome.toUpperCase().includes(searchTerm));
      listarProdutos(filteredProducts);
  });

  // Exibe todos os produtos inicialmente
  listarProdutos(mercadinho);