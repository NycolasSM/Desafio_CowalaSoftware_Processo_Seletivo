// Crie uma função que sempre recebe um objeto como argumento e retorna-o excluindo as propriedades sem valor.

// Ex.: {"fizz": "buzz", "foo": null, "bar": 42} deve retornar {"fizz": "buzz", "bar": 42}

const objeto1 = {
  "fizz": "buzz",
  "foo": null,
  "bar": 42
}

const objeto2 = {
  "gizz": "tuzz",
  "boo": null,
  "car": null,
  "tar": null,
  "gar": 42,
  "var": undefined,
}

const faxina = (obj: object) => {

  let result = {}

  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      result = { ...result, [key]: value }
    }
  }

  console.log(result)
}

faxina(objeto1)
faxina(objeto2)