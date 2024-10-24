// [ ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
//   - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
//   - Apenas contas com o status true podem fazer empréstimo


import { DioAccount } from "./DioAccount"
export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valor: number): void => { // funcao de emprestimo
    if(this.isValidStatus()==true) {
      this.balance = this.balance + valor;
      console.log(`Emprestimo realizado com sucesso! no valor de: ${valor}`)
    }
  }
}
