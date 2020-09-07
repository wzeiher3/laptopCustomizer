import React from 'react';
import store from './store.js';
import './App.css';
import Header from './Header'
import MainForm from './MainForm'
import Summary from './Summary'
import Total from './Total'



const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class App extends React.Component{
  state={
      features: store.FEATURES,
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }


    
    updateFeature = (feature, newValue) => {
      const selected = Object.assign({}, this.state.selected);
      selected[feature] = newValue;
      this.setState({
        selected
      });
    };
    
    render(){
      const {features, selected} = this.state;
      
      return (
        <div className="App">
          <Header />
          <main>
            <MainForm 
                selected = {selected}
                features = {features}
                update = {this.updateFeature}
                currency = {USCurrencyFormat}
            />
            <Summary 
                selected = {selected}
                features = {features}
                currency = {USCurrencyFormat}
            />

            <Total  
                currency = {USCurrencyFormat}
                selected = {selected}
                />
          </main>
        </div>
      );
    }
}

export default App;
