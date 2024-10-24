import { DioAccount } from "./DioAccount";


// [ ] Criar um novo tipo de conta a partir da DioAccount
//   - Esta conta não deve receber novos atributos
//   - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

export class LegalEntities extends DioAccount {
    cnpj_id: number
  
    constructor(cnpj_id: number, name: string, accountNumber: number){
      super(name, accountNumber)
      this.cnpj_id = cnpj_id
    }

    deposit = (valor : number): void => { // funcao de depositar
        if(this.isValidStatus()==true) {
          this.balance = this.balance + valor+10;
          console.log(`Deposito realizado com sucesso! no valor de: ${valor}`)
        }
      }




  }