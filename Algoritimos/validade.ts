// Crie uma função que recebe uma data e uma string. Essa string é a validade. Você deve retornar indicando se está expirado ou não.

// Ex: ("2021-11-17T20:40:09.503Z", "10d") retorna false; ("2021-12-10T00:00:00.000Z", "180d") retorna true.

// ("2021-11-17T20:40:09.503Z", "10d") false
// ("2021-12-10T00:00:00.000Z", "180d") true


// const productData = "2021-12-10T00:00:00.000Z"

const data = "2021-11-17T20:40:09.503Z";
const data2 = "2021-12-10T00:00:00.000Z"
const data3 = "2021-12-11T00:00:00.000Z"

const dataExtendida = "1637181609503"
const dataProduto = "1637181121251"

const validade = (dateToAnalyze: Date, diasParaValidade: number) => {

  const todayDate = new Date()

  const millisecondsOfTheDay = 86400000

  const dateToAnalyzeInMilliseconds =  Date.parse(dateToAnalyze.toString())

  console.log(dateToAnalyzeInMilliseconds)
}

// validade(productData, 18)

const newData = new Date(1637181609503)

console.log(Date.parse(data))

console.log(Date.parse(data3) - Date.parse(data2))

console.log(newData)

// console.log(todayDate)