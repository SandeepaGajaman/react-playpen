import React from 'react';

class TemperatureCalculator extends React.Component {

    constructor(props) {
        super(props);
        this.handleTemp = this.handleTemp.bind(this);
        this.state = {temperature: ''};
        console.log(this.state);
    }

    handleTemp(event) {
        this.setState({temperature: event.target.value});
        console.log({temperature: event.target.value});
    }

    render() {
        const getTemp = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value = {getTemp}
                    onChange = {this.handleTemp}
                />
                <BoilingPoint celsius = {parseFloat(getTemp)}/>
            </fieldset>
        );
    }
}

function BoilingPoint(props) {

    if (props.celsius >= 100) {
        return <p>The water is boiling!</p>;
    }
    return <p>The water not boiling!</p>;

}

export default TemperatureCalculator;