import { faker } from "@faker-js/faker";

export interface IUser {
  id: number;
  name: string;
  email: string;
  joinedOn: Date;
  commentCount: number;
}

export const getFakeUsers = (): IUser[] => {
  const users = [];

  for (let i = 0; i < 750000; i++) {
    let id = i + 1;
    let name = faker.person.fullName();
    let email = faker.internet.email();
    let joinedOn = faker.date.recent();
    let commentCount = faker.number.int({ min: 0, max: 100 });
    let user = {
      id,
      name,
      email,
      joinedOn,
      commentCount,
    };
    users.push(user);
  }
  return users;
};
