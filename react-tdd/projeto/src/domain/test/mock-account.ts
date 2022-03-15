import { AccountModel } from "../models/account-models";
import { AuthenticationParams } from "../usecases/authentication";
// import faker from 'faker';

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'fakerinternertemail@mail.com  ',
  password: 'faker.internet.password',
})

export const mockAccountModel = (): AccountModel => ({
  acessToken: 'faker.random.uuid()'
})
