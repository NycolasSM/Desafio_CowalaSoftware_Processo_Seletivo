// Crie uma função que recebe dois números maiores que zero e exibe na tela (console) uma moldura com essas dimensões.

// Ex: (9, 6)

//    +-------+ ->  (1)
//    -       -
//    -       -
//    -       -
//    -       -
//    +-------+ ->  valor do segundo parametro
//    |       |
//    |       |
//   (1)    ultimo do primeiro parametro


const createFrame = (column: number, row:number) => {

  const createHeaderOrFooter = (column: number) => {
    let result = ""
  
    for (let i = 0; i < column; i++) {
      if(i === 0 || i === column - 1) {
        result += "+"
      } else {
        result += "-"
      }
    }
  
    console.log(result)
  }
  
  const createBody = (column: number) => {
    let result = ""
    
    for (let i = 0; i < column; i++) {
      if(i === 0 || i === column - 1) {
        result += "-"
      } else {
        result += " "
      }
    }
    
    console.log(result)
  }


  for (let i = 0; i < row ; i++) {
    if(i === 0 || i === row -1) {
      createHeaderOrFooter(column)
    } else {
      createBody(column)
    }
  }
}

createFrame(9, 6)
createFrame(7, 4)