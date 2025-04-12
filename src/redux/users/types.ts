export interface User {
  avatar: string | undefined;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface UsersState {
  list: User[];
}
