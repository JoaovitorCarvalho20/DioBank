// [ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
//   - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
//   - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques


export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0 // atributo que e responsavel por armazenar o valor do saldo
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor : number): void => { // funcao de depositar
    if(this.validateStatus()==true) {
      this.balance = this.balance + valor
      console.log(`Deposito realizado com sucesso! no valor de: ${valor}`)
    }
  }

  withdraw = (valor : number ): void => { // funcao de sacar
    if(this.validateStatus()==true) {
      this.balance = this.balance - valor
      console.log(`Saque realizado com sucesso! no valor de: ${valor}`)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
  
  public isValidStatus = (): boolean => {
    return this.validateStatus();
  }

}
