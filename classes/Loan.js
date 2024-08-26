const installment = require("./installment");
module.exports = class Loan {
  static #fee = 1.05;
  constructor(valor, installments) {
    this.valor = valor;
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new installment((valor * Loan.#fee) / installments, i)
      );
    }
    this.createAt = new Date();
  }
};
