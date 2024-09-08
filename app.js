function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Imprime a seção no console para verificar
  
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        // se titulo includes campoPesquisa
        // então, faça...
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
        <div class="item-resultado">
          <h2>
            ${dado.titulo}
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
        }
        
      // Cria uma nova div para cada resultado
      
    }

    if (!resultados) {
        resultados = "<P>Nenhum resultado encontrado</P>"
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }

