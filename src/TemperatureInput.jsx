import React from 'react';

const TemperatureInput = (props) => {
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    const { scale, temperature, onTemperatureInput } = props;

    const handleInput = (event) => onTemperatureInput(event.target.value);

    return (
       <fieldset>
           <legend>Enter temperature in {scaleNames[scale]}:</legend>
           <input type="text" value={temperature} onInput={handleInput} />
       </fieldset>
    );
};

export default TemperatureInput;