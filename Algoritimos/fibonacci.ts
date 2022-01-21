// Crie uma função que sempre recebe um número como argumento, e deve retornar uma array com os N elementos da sequência de Fibonacci.

// Ex.: ao passar 6 como argumento, deve retornar: [0, 1, 1, 2, 3, 5].

const fibonacci = (num: number) => {

  let n1:number = 0;
  let n2:number = 1;
  let result:number = 0;
  let array:number[] = [];

  if(num < 1) {
    return []
  }

  if(num === 1) {
    return [0, 1]
  }

  for(let i = 1; i < num; i++) {
    if(i === 1) {
      array.push(n1)
    }
    result = n1 + n2
    n1 = n2
    n2 = result
    array.push(n1)
  }

  return array
}

console.log(fibonacci(6))