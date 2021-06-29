import React from 'react';
import { useRecoilValue } from 'recoil';
import { userSelector } from '../states/user';
const User = () => {
  const data = useRecoilValue(userSelector);

  return (
    <ul>
      <li>{data.id}</li>
      <li>{data.title}</li>
      <li>{data.userId}</li>
      <li>{data.completed}</li>
    </ul>
  );
};

export default User;
