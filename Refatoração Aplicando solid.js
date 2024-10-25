// (SRP)

class Servico {
    constructor(tipo, preco) {
        this.tipo = tipo;
        this.preco = preco;
    }
}

//  (OCP)
class ServicoBanho extends Servico {
    constructor() {
        super("Banho", 30);
    }
}

class ServicoTosa extends Servico {
    constructor() {
        super("Tosa", 40);
    }
}

// Classe para processar agendamentos
class Agendamento {
    agendar(cliente, servico) {
        console.log(`Agendado ${servico.tipo} para ${cliente}`);
    }
}

// (DIP)
class ProcessadorPagamento {
    processar(total) {
        console.log(`Pagamento processado: R$${total}`);
    }
}

// Classe principal PetShop
class PetShop {
    constructor(nome, processadorPagamento) {
        this.nome = nome;
        this.servicos = [];
        this.processadorPagamento = processadorPagamento;
    }

    adicionarServico(servico) {
        this.servicos.push(servico);
    }

    calcularValorTotal() {
        return this.servicos.reduce((total, servico) => total + servico.preco, 0);
    }

    realizarPagamento() {
        const total = this.calcularValorTotal();
        this.processadorPagamento.processar(total);
    }
}

