/**
    Documentação para consulta
    
    Instruções e declarações
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements
    
    if...else
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    Switch
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

    For
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    While
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
 */


/* 
  1. Elabore um algoritmo que receba uma letra e determine se é uma vogal ou consoante  (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
*/
let letraEscolhida = prompt("Insira uma letra qualquer do alfabeto");
if (letraEscolhida == 'a' || letraEscolhida == 'e' || letraEscolhida == 'i' || letraEscolhida == "o" || letraEscolhida == 'u');{
  alert(`${letraEscolhida} é uma consoante`);
}

switch (letraEscolhida) {
   case 'a':
   case 'e':
   case 'i':
   case 'o':
    alert("é uma vogal");
    break;
   default:
     alert("é uma consoante");
}

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/
  let numeroEscolhido = prompt("Insira um numero de 1-7");
  switch (numeroEscolhido) {
    case '1':
      alert("Domingo");
      break;
    case '2':
      alert("Segunda");
      break;
    case '3':
      alert("Terça");
      break;
    case '4':
      alert("Quarta");
      break;
    case '5':
      alert("Quinta");
      break;
    case '6':
      alert("Sexta");
      break;
    case '7':
      alert("Sábado");
      break;
    default:
      alert("valor inválido, tente novamente");
  }
  


/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
   const numero1 = Number(prompt("Primeiro numero"));
   const numero2 = Number(prompt("Segundo Numero"));

   if (numero1 > numero2){
      alert(`${numero1} é maior que ${numero2}`);
   } else if (numero1 < numero2){
      alert(`${numero1} é menor que ${numero2}`);
   } else{
      alert('Os numeros são iguais');
   }

   

/*
  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média
     e mostre as seguintes mensagens de acordo com cada situação:
  
    Se a media for igual ou maior que 7 - Aprovado
    Se a media for maior e igual a cinco e menor que 7 - Recuperação 
    Se a media for menor que 5 - Reprovado
  
    Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
    Alunos de recuperação devem ver a mensagem: Você está de recuperação!
    Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/
   const nota1Aluno = Number(prompt("Nota 1 do aluno"));
   const nota2Aluno = Number(prompt("Nota 2 do aluno"));
   const nota3Aluno = Number(prompt("Nota 3 do aluno"));
   const media = (nota1Aluno + nota2Aluno + nota3Aluno / 3);
   
   if (media >= 7){
     alert('Parabens, você está aprovado, aproveite suas férias');
   } else if (media >= 5){
     alert('RECUPERAÇÃO');
   }else{
     alert('REPROVADO!');
   }

/* 
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/