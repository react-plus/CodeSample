import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'types';
import StyledWrapper from './styles';
import { fetchTodo } from './thunks';
import { homeSelector } from './selector';

const HomePage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const home = useSelector(homeSelector);

  useEffect(() => {
    (async () => {
      const resultAction = await dispatch(fetchTodo({ value: 10 }));
      if (fetchTodo.fulfilled.match(resultAction)) {
        //TODO handle success
        console.log('handle success');
      } else {
        //TODO handle error
        console.log('handle error');
      }
    })();
  }, []);

  return <StyledWrapper>Home page {home.value}</StyledWrapper>;
};

export default HomePage;
