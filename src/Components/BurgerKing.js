import React from 'react';
import { connect } from 'react-redux';
import { buyBurger, addBurger } from '../Redux';
const BurgerKing = (props) => {
  return (
    <div>
      <h1>BurgerKing</h1>
      <h2>Burger's : {props.numOfBurgers}</h2>
      <button className="btn-order" onClick={props.buyBurger}>
        Order
      </button>
      <span> Choose One </span>
      <button className="btn-add" onClick={props.addBurger}>
        {' '}
        Add one
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfBurgers: state.burger.numOfBurgers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyBurger: () => dispatch(buyBurger()),
    addBurger: () => dispatch(addBurger()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BurgerKing);
