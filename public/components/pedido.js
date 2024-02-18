class Pedido {
    constructor(id, cliente) {
      this.id = id;
      this.cliente = cliente;
      this.itens = [];
    }
  
    adicionarItem(item) {
      this.itens.push(item);
    }
  
    calcularTotal() {
      let total = 0;
      this.itens.forEach(item => {
        total += item.calcularSubtotal();
      });
      return total;
    }
  }
  
  class Item {
    constructor(descricao, quantidade, precoUnitario) {
      this.descricao = descricao;
      this.quantidade = quantidade;
      this.precoUnitario = precoUnitario;
    }
  
    calcularSubtotal() {
      return this.quantidade * this.precoUnitario;
    }
  }
  