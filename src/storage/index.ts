interface UserStorage {
  [key: number]: { name?: string };
}

export const userStorage: UserStorage = {};
