module.exports = class Transfer {
  constructor(user1, user2, valor) {
    this.user1 = user1;
    this.user2 = user2;
    this.createAt = new Date();
    this.valor = valor;
  }
};
