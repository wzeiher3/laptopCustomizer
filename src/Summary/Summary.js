import React from 'react';
import Cart from './Cart';
import Total from './Total';

export default function Summary(props){

      return (
        <section className="main__summary">
        <h2>Your cart</h2>
            <Cart 
                selected = {props.selected}
                features = {props.features}
                currency = {props.currency}
            />

            <Total  
                currency = {props.currency}
                selected = {props.selected}
            /> 
      </section>
      
      )
}