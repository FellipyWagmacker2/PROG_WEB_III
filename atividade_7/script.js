// Selecionando o botão aluno
const aluno = document.getElementById("btnAluno");
// Selecionando o botão Professor
const professor = document.getElementById("btnProfessor");
// Selecionando o botão que cria o professor ou o aluno
const divCriar = document.getElementById("criar");
// Div onde os nomes ficarão
const divNomes = document.getElementById("nomes");
// Variável de validação 
let criarAluno = true;

// Adiciona um evento de clique no botão Aluno
aluno.addEventListener("click", function() {
    criarAluno = true;
    // Limpa o conteúdo da div criar
    divCriar.innerHTML = "";
    // Adiciona um novo botão na div criar
    divCriar.appendChild(criarBotao());
});

// Adiciona um evento de clique no botão "Professor"
professor.addEventListener("click", function() {
    criarAluno = false;
    // Limpa o conteúdo da div cirar
    divCriar.innerHTML = "";
    // Adicoina um novo botão na div criar
    divCriar.appendChild(criarBotao());
});

// Função para criar um botão que permita adicionar um nome de aluno ou professor
function criarBotao() {
    // Cria um novo botão
    const btnCriar = document.createElement("button");
    // Define o texto do botão de acordo com a escolha de criar aluno ou professor
    btnCriar.textContent = criarAluno ? "Criar Aluno" : "Criar Professor";
    // Adiciona um evento de clique no botão
    btnCriar.addEventListener("click", function() {
        // Abre um alert para o usuário digitar o nome do aluno ou professor
        const nome = prompt("Digite o nome:");
        if (nome) {
            // Cria uma nova div para armazenar o nome
            const div = document.createElement("div");
            // Cria um novo parágrafo para exibir o nome
            const p = document.createElement("p");
            // Define o texto do parágarfo de acordo com a escolha de criar aluno ou professor
            p.textContent = criarAluno ? `Aluno: ${nome}` : `Professor: ${nome}`;
            // Adiciona o parágrafo à div criada
            div.appendChild(p);
            // Adiciona a div criada à div nomes
            divNomes.appendChild(div);
            // Adiciona as classes nome, aluno ou professor à div criada dependendo da escolha
            div.classList.add("nome");
            div.classList.add(criarAluno ? "aluno" : "professor");
        }
    });
    return btnCriar;
}
