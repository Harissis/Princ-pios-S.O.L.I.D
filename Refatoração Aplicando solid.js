// Princípio SRP: Separando responsabilidades em classes distintas

// Classe para representar um serviço do Pet Shop
class Servico {
    constructor(tipo, preco) {
        this.tipo = tipo;
        this.preco = preco;
    }
}

// Princípio OCP: Essa classe pode ser estendida para adicionar novos tipos de serviços
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

// Princípio DIP: Processamento de pagamento é uma abstração injetável
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

// Exemplo de uso refatorado
const processadorPagamento = new ProcessadorPagamento();
const petShop = new PetShop("Happy Paws", processadorPagamento);
const agendamento = new Agendamento();

const banho = new ServicoBanho();
const tosa = new ServicoTosa();

petShop.adicionarServico(banho);
petShop.adicionarServico(tosa);

agendamento.agendar("João", banho);
petShop.realizarPagamento();
