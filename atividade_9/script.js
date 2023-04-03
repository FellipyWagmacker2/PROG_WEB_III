const acc_conteudo_1 = document.querySelector("#acco_cont_1");
const acc_conteudo_2 = document.querySelector("#acco_cont_2");
const acc_conteudo_3 = document.querySelector("#acco_cont_3");

acc_conteudo_1.style.display = "none";
acc_conteudo_2.style.display = "none";
acc_conteudo_3.style.display = "none";


function acc1(){
        acc_conteudo_1.style.display = "block";
        acc_conteudo_2.style.display = "none";
        acc_conteudo_3.style.display = "none";
}

function acc2(){
    acc_conteudo_2.style.display = "block";
    acc_conteudo_1.style.display = "none";
    acc_conteudo_3.style.display = "none";
}

function acc3(){
    acc_conteudo_3.style.display = "block";
    acc_conteudo_2.style.display = "none";
    acc_conteudo_1.style.display = "none";
}


