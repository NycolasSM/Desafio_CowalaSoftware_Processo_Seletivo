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

type Person = {
  souEu: boolean,
  responsavel: boolean,
  nome: string
}

type Group = Array<Person>;

const classfificador = (group: Group) => {

  const getUserName = (person: Person) => { return person.nome }
  const getMe = (person: Person) => { return `${getUserName(person)} [Me]` }
  const getResponsibleUser = (person: Person) => { return `${getUserName(person)} [Admin]` }

  const isItMe = (person: Person) => person.souEu;
  const isAdmin = (person: Person) => person.responsavel;
  const isOrdinaryUsers = (person: Person) => !isItMe(person) && !isAdmin(person);

  const itsMe = group.filter(isItMe).map(getMe)
  const admins = group.filter(isAdmin).map(getResponsibleUser).sort()
  const ordinaryUsers = group.filter(isOrdinaryUsers).map(getUserName).sort()
  
  return [...itsMe, ...admins, ...ordinaryUsers]
}

console.log(classfificador(grupoFamilia))
console.log(classfificador(grupoTrabalho))