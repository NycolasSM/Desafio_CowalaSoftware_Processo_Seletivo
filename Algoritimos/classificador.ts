// Crie uma função que sempre recebe uma array de objetos com as seguintes propriedades:

// - souEu: bool
// - responsavel: bool
// - nome: str

// Você deve organizar os objetos da mesma maneira de um grupo de WhatsaApp e retornar um array de nomes, na seguinte ordem:

// 1. Você (propriedade souEu: “true”)
// 2. Responsáveis (propriedade responsavel: “true” e listados em ordem alfabética)
// 3. Não responsáveis (listados em ordem alfabética)

const grupoFamilia: { souEu: boolean, responsavel: boolean, nome: string}[] = [
  {
    souEu: false,
    responsavel: true,
    nome: 'João Silva'
  },
  {
    souEu: true,
    responsavel: false,
    nome: 'Nycolas Santana'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Pedro Marques'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Ana Maria'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Lanna Rodrigues'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Marcos Rosario'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Milton Cabral'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Camila Fonseca'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Antonio Soares'
  },
]

const grupoTrabalho: { souEu: boolean, responsavel: boolean, nome: string}[] = [
  {
    souEu: false,
    responsavel: false,
    nome: 'Roberto Guimarãse'
  },
  {
    souEu: true,
    responsavel: false,
    nome: 'Nycolas Santana'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Carla Souza'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Enrique Gonsalves'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Marcia Soares'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Alexandre Silva'
  },
]

interface IGrupo {
  souEu: boolean,
  responsavel: boolean,
  nome: string
}[]

const classfificador = (grupo: IGrupo[]) => {

  const usuarioResonsavel = (pessoa: any) => { return { Nome: pessoa.nome, responsavel: pessoa.responsavel } }
  const usuarioComum = (pessoa: any) => { return pessoa.nome }

  const getEu = grupo.filter((pessoa) => pessoa.souEu === true);
  const getResponsaveis = grupo.filter((pessoa) => pessoa.responsavel === true);
  const getNãoResponsaveis = grupo.filter((pessoa) => pessoa.responsavel === false && pessoa.souEu === false);

  const souEu = (getEu.map(usuarioComum))
  const responsaveis = (getResponsaveis.map(usuarioResonsavel).map((el) => el.Nome).map(el => el.concat(" [Admin]")).sort())
  const nãoResponsaveis = (getNãoResponsaveis.map(usuarioComum).sort())

  const resultado = []

  resultado.push(souEu, responsaveis, nãoResponsaveis)

  return resultado.reduce((resultado, nomes) => resultado.concat(nomes), [])
}

console.log(classfificador(grupoFamilia))
console.log(classfificador(grupoTrabalho))