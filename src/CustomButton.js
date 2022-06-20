import React from 'react';
import styled from 'styled-components';

const ColorButton = styled.button`
    background-color:green;
    color: white;
    width: 50px;
    height: 50px;
    text-align: center;
`;

const ReusableButton = ({children, className}) => {
    return <ColorButton className={className}> {children} </ColorButton>;
}

export default ReusableButton;