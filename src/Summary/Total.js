import React from 'react';

export default function Total(props){
        const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );
    
    return (
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {props.currency.format(total)}
          </div>
        </div>
    )
}