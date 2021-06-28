import React from 'react';
import useSwr from 'swr';
import { userApi } from '../utils/api';
const User = () => {
  const { data } = useSwr('https://jsonplaceholder.typicode.com/todos/1', userApi.getUser, {
    suspense: true,
    refreshInterval: 10000,
  });
  if (data) {
    return (
      <ul>
        <li>{data.id}</li>
        <li>{data.title}</li>
        <li>{data.userId}</li>
        <li>{data.completed}</li>
      </ul>
    );
  }
  return <h1>getting</h1>;
};

export default User;
