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
    souEu: true,
    responsavel: false,
    nome: 'Nycolas Santana'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Marcos Rosario'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'João Silva'
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

interface IGroup {
  souEu: boolean,
  responsavel: boolean,
  nome: string
}[]

const classfificador = (group: IGroup[]) => {

  const usuarioResonsavel = (person: any) => { return { Nome: person.nome, responsavel: person.responsavel } }
  const usuarioComum = (person: any) => { return person.nome }

  const getMe = group.filter((person) => person.souEu === true);
  const getAdmins = group.filter((person) => person.responsavel === true);
  const getNotAdmins = group.filter((person) => person.responsavel === false && person.souEu === false);

  const ItsMe = (getMe.map(usuarioComum))
  const admins = (getAdmins.map(usuarioResonsavel).map((el) => el.Nome).map(el => el.concat(" [Admin]")).sort())
  const notAdmins = (getNotAdmins.map(usuarioComum).sort())

  const result = []

  result.push(ItsMe, admins, notAdmins)

  return result.reduce((result, nomes) => result.concat(nomes), [])
}

console.log(classfificador(grupoFamilia))
console.log(classfificador(grupoTrabalho))