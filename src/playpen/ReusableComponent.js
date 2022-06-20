import React from 'react';
import ReusableButton from '../CustomButton';
import styled from 'styled-components';

const ReusableForm = () => {

    const ModifyButton = styled(ReusableButton)`
        background-color: red;
    `;

    const [userName, setUserName] = React.useState('Reusable Form');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(userName);
    }

    return (
        <div>
        <br/>
            <form onClick={handleFormSubmit}>
                <input
                    type='text'
                    name='userName'
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <input type='submit' value='Submit'/>
                <ReusableButton><div><p>Green</p></div></ReusableButton>
                <ModifyButton><div><p>Red</p></div></ModifyButton>
            </form>
        </div>
    );
}

export default ReusableForm;