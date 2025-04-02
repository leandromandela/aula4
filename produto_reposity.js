class ProdutoRepository {
    constructor() {
      this.produtos = [];
      this.id = 1;
    }
  
    inserir(nome, categoria, preco) {
      const produto = {
        id: this.id,
        nome,
        categoria,
        preco,
      };
      this.produtos.push(produto);
      this.id++;
      return produto;
    }
  
    listar() {
      return this.produtos;
    }
  
    buscarPorId(id) {
      return this.produtos.find((produto) => produto.id === id);
    }
  
    atualizar(id, produto) {
      const index = this.produtos.findIndex((p) => p.id === id);
      if (index !== -1) {
        this.produtos[index] = produto;
        return produto;
      }
      return null;
    }
  
    deletar(id) {
      const index = this.produtos.findIndex((produto) => produto.id === id);
      if (index !== -1) {
        this.produtos.splice(index, 1);
        return true;
      }
      return false;
    }
  
    pesquisarPorCategoria(categoria) {
      return this.produtos.filter((produto) => produto.categoria === categoria);
    }
  
    pesquisarPorNome(nome) {
      return this.produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(nome.toLowerCase())
      );
    }
  }
  
  module.exports = ProdutoRepository;