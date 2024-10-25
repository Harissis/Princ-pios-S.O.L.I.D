// Classe PetShop que faz múltiplas funções, fazendo a violção dos princípios S.O.L.I.D.
class PetShop {
    constructor(nome) {
        this.nome = nome;
        this.servicos = [];
    }

    adicionarServico(tipo, preco) {
        this.servicos.push({ tipo, preco });
    }

    calcularValorTotal() {
        return this.servicos.reduce((total, servico) => total + servico.preco, 0);
    }

    realizarAgendamento(cliente, servico) {
        console.log(`Agendado ${servico} para ${cliente}`);
    }

    processarPagamento() {
        console.log(`Pagamento processado: R$${this.calcularValorTotal()}`);
    }
}

