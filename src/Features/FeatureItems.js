import React from 'react';
import Item from './Item'
import slugify from 'slugify';

export default function FeatureItems(props){
    const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
        return (
            <Item 
                itemHash = {itemHash}
                feature = {feature}
                item = {item}
                selected = {props.selected}
                currency = {props.currency}
                update = {props.update}
            />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
 
    return (
      <div>{features}</div>
    )
}