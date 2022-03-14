import { AuthenticationParams } from "../../domain/usecases/authentication";
// import faker from 'faker';

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'fakerinternertemail@mail.com  ',
  password: 'faker.internet.password',
})
