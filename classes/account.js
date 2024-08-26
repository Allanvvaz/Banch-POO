module.exports = class Account {
  #balance;
  constructor(user) {
    this.user = user;
    this.#balance = 0;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }
  get balance() {
    return this.#balance;
  }

  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }
  addLoan(loan) {
    this.#balance = +loan.value;
    this.loans.push(loan);
  }
  addTransfer(transfer) {
    if (transfer.user === this.user) {
      this.#balance += transfer.value;
      this.transfers.push(transfer);
    } else if (transfer.user != this.user) {
      this.#balance -= transfer.value;
      this.transfers.push(transfer);
    }
  }
};
