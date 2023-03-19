function romanos(num) {
    // Array com números normais
    const valores = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    // Array com números romanos
    const num_romanos = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    // Variavel que armazena o resultado
    let resultado = "";
    
    // O loop vai rodar enquanto i for menor que a lista de valores
    for (let i = 0; i < valores.length; i++) {
      // Enquanto o número for maior que os números da array
      while (num >= valores[i]) {
        // Ele vai adicionar um número da lista dos romanos correspondente a um número da lista de valores
        resultado += num_romanos[i];
        // Subtraindo o valor no número pelo número da lista de valores
        num -= valores[i];
      }
    }
    // Retornando o número
    return resultado;
  }
  // Variável com o número
  let numero = 80;
  // Imprimindo o número eschido e transformando ele em número romano
  document.write(`${numero} em romano é ${romanos(numero)}`);