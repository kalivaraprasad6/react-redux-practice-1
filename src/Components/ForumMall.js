import React from 'react';
import { connect } from 'react-redux';
import { buyStarBucks, addStarBucks } from '../Redux';

const ForumMall = (props) => {
  return (
    <div>
      <h1>Forum Mall</h1>

      <h2>StarBucks</h2>
      <h2> Coffee : {props.numOfCoffees} </h2>
      <button className="btn-order" onClick={props.buyStarBucks}>GET ONE -</button>
      <span>  Choose One  </span>
      <button className="btn-add" onClick={props.addStarBucks}>ADD ONE +</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numOfCoffees: state.coffee.numOfCoffees,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyStarBucks: () => dispatch(buyStarBucks()),
    addStarBucks: () => dispatch(addStarBucks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForumMall);
