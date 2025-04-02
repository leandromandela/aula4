const ProdutoRepository = require('./produto_repository');

const repository = new ProdutoRepository();

// Inserir produtos
const produto1 = repository.inserir('Produto 1', 'Categoria 1', 10.99);
const produto2 = repository.inserir('Produto 2', 'Categoria 1', 5.99);
const produto3 = repository.inserir('Produto 3', 'Categoria 2', 7.99);

// Listar produtos
console.log('Produtos:');
console.log(repository.listar());

// Buscar por id
console.log('Buscar por id:');
console.log(repository.buscarPorId(1));

// Atualizar produto
produto1.nome = 'Produto 1 atualizado';
console.log('Atualizar produto:');
console.log(repository.atualizar(1, produto1));

// Deletar produto
console.log('Deletar produto:');
console.log(repository.deletar(2));

// Pesquisar por categoria
console.log('Pesquisar por categoria:');
console.log(repository.pesquisarPorCategoria('Categoria 1'));

// Pesquisar por nome
console.log('Pesquisar por nome:');
console.log(repository.pesquisarPorNome('Produto'));