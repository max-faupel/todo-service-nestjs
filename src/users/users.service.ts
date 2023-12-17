import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'max',
        password: 'dummy',
      },
    ];
  }

  async findOne(username) {
    return this.users.find((user) => user.username === username);
  }
}
