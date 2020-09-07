import React from 'react';
import Cart from './Cart';

export default function Summary(props){

      return (
        <section className="main__summary">
        <h2>Your cart</h2>
            <Cart 
                selected = {props.selected}
                features = {props.features}
                currency = {props.currency}
            />
      </section>
      )
}