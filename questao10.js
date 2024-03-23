//10) algoritmo: MultiplicacaoDeMatrizes(matrizA, matrizB):
// definina uma matriz A(axb)
// defina uma matriz B(cxd)
// Se A diferente de D
// Retornar: A multiplicação não pode ocorrer
// Se A é igual D 
// A multiplicação continua


// Algoritmo: MultiplicacaoDeMatrizes(matrizA, matrizB):
//     // Defina as dimensões das matrizes A e B
//     a = número_de_linhas(matrizA)
//     b = número_de_colunas(matrizA)
//     c = número_de_linhas(matrizB)
//     d = número_de_colunas(matrizB)
//     Se b ≠ c Então
//         Retornar "A multiplicação não pode ocorrer"
//     Fim
//      Se b=c Então
//     Realize a multiplicação das matrizes
//     matrizResultado <- novaMatriz(linhasA, colunasB)

// Para i de 0 até linhasA-1 faça:
// Para j de 0 até colunasB-1 faça:
//     matrizResultado[i][j] <- 0
//     Para k de 0 até colunasA-1 faça:
//         matrizResultado[i][j] <- matrizResultado[i][j] + matrizA[i][k] * matrizB[k][j]

//Retornar matrizResultado
// Fim Algoritmo
