import { FC } from 'react';
import { Header, Input, Group, Logout } from 'components';

export const Main: FC = () => {
  return (
    <>
      <Logout />
      <Header />
      <Input />
      <Group />
    </>
  );
};
