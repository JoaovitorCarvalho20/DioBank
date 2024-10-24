import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  cpf_id: number

  constructor(cpf_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.cpf_id = cpf_id
  }
}