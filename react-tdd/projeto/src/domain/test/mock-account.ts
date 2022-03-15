import { AccountModel } from "../models";
import { AuthenticationParams } from "../usecases";
// import faker from 'faker';

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'fakerinternertemail@mail.com  ',
  password: 'faker.internet.password',
})

export const mockAccountModel = (): AccountModel => ({
  acessToken: 'faker.random.uuid()'
})
