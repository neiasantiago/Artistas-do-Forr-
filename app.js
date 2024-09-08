function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum artista foi encontrado</p>"
        return 
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado dentro da lista de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        //se título includes campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            //Cria um novo elemento
            resultados += `
            <div class="itens-resultado">
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.canalYoutube} target="_blank">Canal do Youtube</a>
            </div>
        `;
    }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de um cantor(a) ou banda</p>"
    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}