// Crie uma função que recebe uma data e uma string. Essa string é a validade. Você deve retornar indicando se está expirado ou não.

// Ex: ("2021-11-17T20:40:09.503Z", "10d") retorna false; ("2021-12-10T00:00:00.000Z", "180d") retorna true.

const dataExemplo1 = "2021-11-17T20:40:09.503Z"; // 10d return false
const dataExemplo2 = "2021-12-10T00:00:00.000Z"; // 180d return true


// OBS: como conseguir saber o valor que equivale a um dia em milisegundos
// atribui duas datas com exatamente um dia de diferença, converti para milesegundos e tirei a diferença


const validade = (dateToAnalyze: string, daysToExpire: number) => {

  const todayDate = new Date()
  const todayDateInMilliseconds = Date.parse(todayDate.toString())

  const oneDayInMilliseconds = 86400000

  const dateToAnalyzeInMilliseconds =  Date.parse(dateToAnalyze.toString())

  const totalOfDateWithDaysToExpire = dateToAnalyzeInMilliseconds + (oneDayInMilliseconds * daysToExpire)

  if (totalOfDateWithDaysToExpire < todayDateInMilliseconds) {
    return false
  } else {
    return true
  }
}

console.log(validade(dataExemplo1, 10))
console.log(validade(dataExemplo2, 180))