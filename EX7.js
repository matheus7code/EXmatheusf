//fazer um levantamento de dados
// trazer soma de salarios de 6 usuarios
//os usuarios devem ter
//nome
//sobrenome
//cidade
//colocar o nome do banco q utiliza
//conta salarial
//fazer a soma dos salarios
//depois fazer a divisao por 6
//e fazer um if else como valor dividido dos salario
// se a pessoa e milionaria,rica , bem de vida, classe media e pobre
//e utiliar o for para ficar mais facil de codar essa atividade
//e fazer uma array

//depois fazer uma saudacao
//ex : seu nome é lucas... e sua idade .. seu cpf.. sua conta

const nomes = ['Ramon', 'Edgar', 'Pedro', 'Oscar', 'William', 'Lucas']

const cidade = [
  'Blumenau',
  'Itajai',
  'Joinvile',
  'Rio de Janeiro',
  'São Paulo',
  'Gaspar',
]

const NomeBanco = [
  'Santander',
  'Bradesco',
  'Itau',
  'Nubank',
  'Intenacional',
  'Safra',
]

let totalsalarios = 0

for (let i = 1; i <= 6; i++) {
  let salarios = parseInt(prompt('me informe o salario' + i + ':'))
  console.log(salarios)

  if (isNaN(salarios)) {
    console.log('o salario que voce digitou nao existe ')
    i--
  } else {
    totalsalarios += salarios
  }
}

let mediasalarios = totalsalarios / 6

//Soma dos salarios
console.log('a soma total do salarios é ' + totalsalarios)
console.log('a media dos salarios é ' + mediasalarios)

/*
const salario1 = parseInt(prompt("Usuario 1, me informe seu salario: "));
const salario2 = parseInt(prompt("Usuario 2, me informe seu salario: "))
const salario3 = parseInt(prompt("Usuario 3, me informe seu salario: "))
const salario4 = parseInt(prompt("Usuario 4, me informe seu salario: "))
const salario5 = parseInt(prompt("Usuario 5, me informe seu salario: "))
const salario6 = parseInt(prompt("Usuario 6, me informe seu salario: "))
*/

if ((mediasalarios >= 0, mediasalarios <= 1500)) {
  console.log('voce é pobre')
} else if ((mediasalarios >= 1501, mediasalarios <= 3500)) {
  console.log('voce é classe media')
} else if ((mediasalarios >= 3501, mediasalarios <= 10000)) {
  console.log('voce é bem de vida')
} else if ((mediasalarios >= 10001, mediasalarios <= 50000)) {
  console.log('voce é rico')
} else if (mediasalarios > 50001) {
  console.log('voce é milionario')
} else {
  console.log('salario nao existente')
}

console.log("Abaixo estarão os usuarios usados como exemplo para a saudação: ");

console.log("Olá " + nomes[0] + " você mora em " + cidade[0] + " e você utiliza o banco " + NomeBanco[0]);

console.log("Olá " + nomes[1] + " você mora em " + cidade[1] + " e você utiliza o banco " + NomeBanco[1]);

console.log("Olá " + nomes[2] + " você mora em " + cidade[2] + " e você utiliza o banco " + NomeBanco[2]);

console.log("Olá " + nomes[3] + " você mora em " + cidade[3] + " e você utiliza o banco " + NomeBanco[3]);

console.log("Olá " + nomes[4] + " você mora em " + cidade[4] + " e você utiliza o banco " + NomeBanco[4]);

console.log("Olá " + nomes[5] + " você mora em " + cidade[5] + " e você utiliza o banco " + NomeBanco[5]);
