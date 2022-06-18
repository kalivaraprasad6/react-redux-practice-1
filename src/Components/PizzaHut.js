import React from 'react';
import { addPizza, buyPizza } from '../Redux';
import { useSelector, useDispatch } from 'react-redux';
const PizzaHut = () => {
  const noOfPizza = useSelector((state) => state.pizza.noOfPizza);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>num of Pizza : {noOfPizza}</h1>
      <button onClick={() => dispatch(buyPizza())}>Order</button>
      <button onClick={() => dispatch(addPizza())}> Cancel</button>
    </div>
  );
};

export default PizzaHut;
