import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import StyledWrapper from './styles';
import { homeSelector } from './selector';

const HomePage: FC = () => {
  const home = useSelector(homeSelector);

  return <StyledWrapper>Home page {home.value}</StyledWrapper>;
};

export default HomePage;
