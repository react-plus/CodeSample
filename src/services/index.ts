import axios from 'utils/axios';

import UsersService from './users';
import AuthService from './auth';

export const usersService = new UsersService(axios);
export const authService = new AuthService(axios);
