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