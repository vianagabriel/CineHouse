const catalogoJson = require('./dataBase/catalogo.json')

function adicionarFilme(codigo, titulo, duracao, atores, lancamento, emCartaz) {
  catalogoJson.push({
    codigo: codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    lancamento: lancamento,
    emCartaz: emCartaz
  })
}
adicionarFilme(
  5,
  'Doze é demais',
  '1h 47min',
  ['Zach Braff', 'Luke Prael'],
  2022,
  true
)

// Essa função busca um determinado filme no meu array segundo o codigo passado para ele;
function buscarFilme(codigo) {
  for (let i = 0; i < catalogoJson.length; i++) {
    if (catalogoJson[i].codigo == codigo) {
      console.log(`-------------------\n
     Codigo: ${catalogoJson[i].codigo}\n
     Titulo: ${catalogoJson[i].titulo}\n
     Duração: ${catalogoJson[i].duracao} \n
     Atores: ${catalogoJson[i].atores.join(', ')}\n
     Ano de lançamento: ${catalogoJson[i].lancamento}\n
     Em cartaz: ${catalogoJson[i].emCartaz === true ? 'Sim' : 'Não'}\n `)
    }
  }
}

// Essa função altera o status em cartaz se estiver true vira false, além de receber a buscarFilme como callback;
function alterarStatusEmCartaz(codigo, buscarFilme) {
  console.log('Esse filme não está em cartaz! ')
  for (let i = 0; i < catalogoJson.length; i++) {
    if (catalogoJson[i].codigo === codigo) {
      catalogoJson[i].emCartaz === true
        ? (catalogoJson[i].emCartaz = false)
        : (catalogoJson[i].emCartaz = true)
      buscarFilme(codigo)
    }
  }
}

// Essa função vai no meu array de filmes e retorna todos eles;
function listarTodosOsFilmes(catalogoJson) {
  console.log('Os filmes disponiveis são:')
  catalogoJson.forEach(function (catalogoJson) {
    console.log(`-------------------\n
          Codigo: ${catalogoJson.codigo}\n
          Titulo: ${catalogoJson.titulo}\n
          Duração: ${catalogoJson.duracao} \n
          Atores: ${catalogoJson.atores.join(', ')}\n
          Ano de lançamento: ${catalogoJson.lancamento}\n
          Em cartaz: ${catalogoJson.emCartaz === true ? 'Sim' : 'Não'}\n`)
  })
}

// Essa função lista os filmes em cartaz;
function listarFilmesEmCartaz(catalogoJson) {
  console.log('Os filmes em cartaz são:')
  for (var i = 0; i < catalogoJson.length; i++) {
    if (catalogoJson[i].emCartaz === true) {
      console.log(`-------------------\n
         Codigo: ${catalogoJson[i].codigo}\n
         Titulo: ${catalogoJson[i].titulo}\n
         Duração: ${catalogoJson[i].duracao} \n
         Atores: ${catalogoJson[i].atores.join(', ')}\n
         Ano de lançamento: ${catalogoJson[i].lancamento}\n
         Em cartaz: ${catalogoJson[i].emCartaz === true ? 'Sim' : 'Não'}\n`)
    }
  }
}

// Essa função lista os filmes com duração maior que 2 horas;

function listarFilmesDeLongaDuracao() {
  console.log('Os filmes com duração maior que 2 horas são:')
  return catalogoJson.filter(function (catalogo, index) {
    return catalogoJson[index].duracao >= '2h'
  })
}


