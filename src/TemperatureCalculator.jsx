import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

class TemperatureCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c',
        };
    }

    handleCelsiusInput = (temperature) => {
        this.setState({
            temperature,
            scale: 'c',
        });
    }
    
    handleFahrenheitInput = (temperature) => {
        this.setState({
            temperature,
            scale: 'f',
        });
    }

    convertTemperature = (scale, convert) => {
        const input = parseFloat(this.state.temperature);
        if(Number.isNaN(input)) {
            return '';
        }
    
        const output = scale === this.state.scale ? input : convert(input);
        const roundedOutput = Math.round(output * 1000) / 1000;
        return roundedOutput.toString();
    }

    render() {
        const celsius = this.convertTemperature('c', toCelsius);
        const fahrenheit = this.convertTemperature('f', toFahrenheit);

        return (
            <div>
                <TemperatureInput 
                    scale='c' 
                    temperature={celsius} 
                    onTemperatureInput={this.handleCelsiusInput} />
                <TemperatureInput 
                    scale='f' 
                    temperature={fahrenheit} 
                    onTemperatureInput={this.handleFahrenheitInput} />
                <BoilingVerdict temperature={celsius} />
            </div>
        );
    }
}

export default TemperatureCalculator;