// Exercício 1 - Definir a melhor estrutura de dados para os casos apresentados.

// ---

let frutas = ['Abacate', 'Ameixa', 'Carambola', 'Goiaba', 'Jaca', 'Limão', 'Maçã', 'Mamão', 'Manga', 'Melancia', 'Pera', 'Uva']

let legumes = ['Abóbora', 'Abobrinha', 'Berinjela', 'Beterraba', 'Milho Verde', 'Quiabo', 'Tomate']

let verduras = ['Acelga', 'Alface', 'Chicória', 'escarola', 'Espinafre', 'Salsa']

// ---

let passagemAerea = {
    origem: 'Rio de Janeiro (SDU)',
    destino: 'São Paulo (GRU)',
    partida: '20:30',
    chegada: '21:35',
    valor: 1255,
    ciaAerea: 'Gol Linhas Aéreas',
    duracao: '1h 5min',
    tipoDeVoo: 'sem escalas',
    tipoCombo: 'ida e volta'
}

// ---

function Produto(nome, codigoProduto, cor, qntProduto, valorUnitario) {
    this.nome = nome,
        this.codigoProduto = codigoProduto,
        this.cor = cor,
        this.qntProduto = qntProduto,
        this.valorunitario = valorUnitario,
        this.valorTotal = this.qntProduto * this.valorunitario //Creio que não seja a melhor forma de fazer, porém para o momento está funcionando
}

const produto1 = new Produto('baby flyer', '117.099000-000091', 'café', 24, 56.29)

const produto2 = new Produto('baby flyer', '117.100000-000002', 'preto', 12, 48.40)

const produto3 = new Produto('baby flyer', '117.100000-007703', 'mostarda/preto', 24, 48.40)


let produtos = [produto1, produto2, produto3]

// ---

function Livro(titulo, autor, editora, anoEdicao, estante, peso, isbn, idioma, dataCadastro, descricao) {
    this.titulo = titulo,
        this.autor = autor,
        this.editora = editora,
        this.anoedicao = anoEdicao,
        this.estante = estante,
        this.peso = peso,
        this.isbn = isbn,
        this.idioma = idioma,
        this.dataCadastro = dataCadastro,
        this.descricao = descricao
}

const livro = new Livro(
    'para educar meninas feministas',
    'chimamanda ngozi adichie',
    'companhia das letras',
    2019,
    'sociologia,',
    '93g',
    '9788535928518',
    'português',
    '16 de maio de 2022',
    ['SKU 26742287', 'Acabamento: Brochura', 'Dimensão: 14 x 21', 'Livro em bom estado de conservação', 'Possui vários grifos a lápis', 'Páginas: 96']
)

// 2- Faça um código em JS que realize a operação desejada entre os números 33 e 5,
// conforme um operador informado.

let operador = '-' //o operador deverá ser alterado para testar cada caso
let resultado = 0

switch (operador) {
    case '-':
        resultado = 33 - 5
        console.log('O resultado da operação de 33 - 5 é: ', resultado)
        break;
    case '+':
        resultado = 33 + 5
        console.log('O resultado da operação de 33 + 5 é: ', resultado)
        break;
    case '*':
        resultado = 33 * 5
        console.log('O resultado da operação de 33 * 5 é: ', resultado)
        break;
    case '/':
        resultado = 33 / 5
        console.log('O resultado da operação de 33 / 5 é: ', resultado)
        break;
    case '%':
        resultado = 33 % 5
        console.log('O resultado da operação de 33 % 5 é: ', resultado)
        break;
    default:
        console.log('Operador inválido')

}

// 3- Retornar todas as frutas que tenham a letra "o"

const frutas = ["Abacaxi", "Uva", "Maçã", "Goiaba", "Abacate", "Acerola"]

const frutasComO = frutas.filter((fruta) => { return fruta.includes('o') })

console.log(frutasComO)

// 4- Faça um código em JS que informe o total de horas trabalhadas no dia de uma funcionária.

const calculaHoraTrabalhada = (horaTrablhada) => {
    typeof (horaTrablhada) === 'number' ? (
        horaTrablhada < 6 ?
            console.log('Você trabalhou ', horaTrablhada, ' horas') :
            console.log('Você trabalhou ', horaTrablhada - 1, ' horas')) :
        console.log('O valor informado não é valido')
}

// 5- Faça um código em JS que realize a soma dos números pares pertencentes ao intervalo de 1 a 100 e retorne o resultado da soma.

const somarNumPar = (inicio = 1, fim = 100) => {
    let intervalo = []
    for (let i = 0; i <= (fim - inicio); i++) {
        (inicio + i) % 2 === 0 && (intervalo.push(inicio + i));
    }

    const soma = intervalo.reduce((somatorio, numero) => {
        return somatorio + numero
    })
    // console.log(intervalo)
    console.log(soma)
}

// 6- Faça um código em JS que retorne os números do array abaixo de forma decrescente.

const inverteArray = (arr) => {
    let invertido = []

    for (let i = arr.length; i > 0; i--) {
        invertido.push(arr[i - 1])

    }
    console.log(invertido)
}

// 7- Faça um código em JS que retorne quantos dias existem entre as datas de início e fim

const listaDeDatas = [{ dateStart: '12/01/2022', dateEnd: '12/03/2022' },
{ dateStart: '27/03/2022', dateEnd: '11/04/2022' },
{ dateStart: '02/04/2022', dateEnd: '22/04/2022' },
{ dateStart: '11/05/2022', dateEnd: '12/05/2022' }]

const calcularDiferencaDeDias = (listaDeDatas) => {
    // For usado para converter a data para um formato aceito pelo Date()
    for (let i = 0; i < listaDeDatas.length; i++) {
        listaDeDatas[i].dateEnd = listaDeDatas[i].dateEnd.split('/').reverse().join('/')
        listaDeDatas[i].dateStart = listaDeDatas[i].dateStart.split('/').reverse().join('/')

    }

    const intervaloDeDias = listaDeDatas.map((data) => {
        let dia = 3600000 * 24
        let dataInicio = new Date(data.dateStart)
        let dataFim = new Date(data.dateEnd)
        return (dataFim - dataInicio) / dia
    })

    console.log(intervaloDeDias)
}

// 8- Faça um código em JS que estruture os dados, calcule e retorne o resultado do somatório da lista de compras

function Carrinho(itens, codigoConsultor, formaPagamento,) {
    this.itens = itens,
    this.codigoConsultor = codigoConsultor,
    this.formaPagamento = formaPagamento

}

const car = new Carrinho([{
        nome: 'jaqueta trucker jeans manga longa com forro de pelo azul médio g',
        valorUnitario: 249.99,
        qunatidade: 1,
        desconto: 0,
        valorTotal: 249.99,
        vendidoPor: 'CeA'
    },
    {
        nome: 'mochilete média ever after high 17z',
        valorUnitario: 399.90,
        qunatidade: 1,
        desconto: 337,
        valorTotal: 62.90,
        vendidoPor: 'Mundo Bag'
    },
    {
        nome: 'oculos de sol aviador ace dourado unico',
        valorUnitario: 69.99,
        qunatidade: 2,
        desconto: 0,
        valorTotal: 139.98,
        vendidoPor: 'CeA'
    },
    {
        nome: 'suéter de pelúcia sherpa com zíper bege m',
        valorUnitario: 199.99,
        qunatidade: 1,
        desconto: 0,
        valorTotal: 199.99,
        vendidoPor: 'CeA'
    }
    ],'',''
)

const somarCarrinho = (carr) => {
    return carr.itens.map(item => item.valorTotal).reduce((pre, curr) => pre + curr)
}