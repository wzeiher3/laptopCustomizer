import React from 'react';
import FeatureItems from '../Features/FeatureItems'


export default function MainForm(props){
    return (
        <form className="main__form">
            <h2>Customize you laptop</h2>
            <FeatureItems 
                selected ={props.selected}
                features = {props.features}
                update = {props.update}
                currency = {props.currency}
            />
        </form>
    )
}