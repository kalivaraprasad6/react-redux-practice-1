import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyBurger } from '../Redux';
const UseSelectorHook = () => {
  const numOfBurger = useSelector((state) => state.burger.numOfBurgers);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>useSelectorHook</h1>
      <h2> num of Burgers :{numOfBurger} </h2>
      <button onClick={() => dispatch(buyBurger())}>Get one</button>
    </div>
  );
};
export default UseSelectorHook;
