import { atom, selector } from 'recoil';
import { userApi } from '../utils/api';

export const userSelector = selector({
  key: 'userInfo',
  get: ({ get }) => userApi.getUser('https://jsonplaceholder.typicode.com/todos/1'),
});
