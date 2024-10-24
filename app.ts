import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount( 1, 'Nathally', 10)
console.log(peopleAccount)
peopleAccount.deposit(1000)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(2)
console.log(companyAccount)