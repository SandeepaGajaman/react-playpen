import React from 'react';

// https://reactjs.org/docs/lifting-state-up.html

class TempInputs extends React.Component {
    //
    constructor(props) {
        super(props);
        this.handleTemp = this.handleTemp.bind(this);

        console.log('3. TempInputs constructor~');
    }

    //
    handleTemp(event) {
        this.props.onTempChange(event.target.value);
        console.log('7. Invoke handleTemp in TempInputs class~')
    }

    //
    render() {
        const getTemp = this.props.temp;
        const getScale = this.props.scale;

        console.log('4. TempInputs render~');

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[getScale]}:</legend>
                <input
                    value = {getTemp}
                    onChange = {this.handleTemp}
                />
            </fieldset>
        );
    }
}

class TemperatureCalculator2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleFahrenheitTemp = this.handleFahrenheitTemp.bind(this);
        this.handleCelsiusTemp = this.handleCelsiusTemp.bind(this);
        this.state = {temp: '', scale: 'c'};
        console.log('1. TemperatureCalculator2 constructor~');
    }

    handleFahrenheitTemp(temp) {
        this.setState({scale: 'f', temp});
        console.log('6. Input "F" handleFahrenheitTemp~');
    }

    handleCelsiusTemp(temp) {
        this.setState({scale: 'c', temp});
        console.log('6. Input "C" handleCelsiusTemp~');
    }

    render() {

        const getScale = this.state.scale;
        const getTemperature = this.state.temp;
        
        const celsius = getScale === 'f' ? inputConverter(getTemperature, toCelsius) : getTemperature;
        const fahrenheit = getScale === 'c' ? inputConverter(getTemperature, toFahrenheit) : getTemperature;

        console.log('2. TemperatureCalculator2 render~');

        return (
            <div>
                <TempInputs 
                    scale = "c"
                    temp = {celsius}
                    onTempChange = {this.handleCelsiusTemp}
                />
                <TempInputs 
                    scale = "f" 
                    temp = {fahrenheit}
                    onTempChange = {this.handleFahrenheitTemp}
                />
                <BoilingPoint 
                    celsius = {parseFloat(getTemperature)}
                />
            </div>
        );
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    console.log('8. Convert "F" toCelsius~');
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    console.log('8. Convert "C" toFahrenheit~');
    return (celsius * 9 / 5) + 32;
}

function inputConverter(tempInput, convertInput) {
    
    const input = parseFloat(tempInput);
    
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convertInput(input);
    const rounded = Math.round(output * 1000) / 1000;

    console.log('9. Invoke inputConverter~');
    return rounded.toString();
}

function BoilingPoint(props) {

    console.log('5. BoilingPoint~')

    if (props.celsius >= 100) {
        return <p>The water is boiling!</p>;
    }
    return <p>The water not boiling!</p>;

}


export default TemperatureCalculator2;