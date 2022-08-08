let dataAtual = '08/08/2022'
let idade = 19
let nParticipantes = 99
let palestrantes = ['Steve Jobs', ' Bill Gates', ' Elon Musk.']

if (dataAtual >= '08/08/2022') {
  console.log('Data do evento - ok ')

  if (idade >= 18) {
    console.log('Idade - ok')

    if (nParticipantes <= 99) {
      console.log('Cadastro realizado com sucesso')
      console.log('Os palestrantes do dia são: ' + palestrantes)
    } else {
      console.log('Cadastro não permitido, excedido o número de participantes')
    }
  } else {
    console.log('Idade inválida, você precisa ser maior de idade')
  }
} else {
  console.log('Cadastro não permitido, data inválida.')
}
