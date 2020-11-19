
import React from 'react';
import { ButtonContainer, InnerButton } from './style';
import PropTypes from 'prop-types';


export function SegmentedButton({ className, value, options, onChange, large}) {
    return (
        <ButtonContainer className={className} >
            {options.map((option, index) => (
                <InnerButton large={large} className ={className} key={index} active={value === option} onClick={() => onChange(option)}>
                    {option}
                </InnerButton>
            ))}
        </ButtonContainer>
    );
}
SegmentedButton.propTypes = {
    className: PropTypes.string,
    value: PropTypes.node,
    options: PropTypes.node,
    onChange: PropTypes.node,
    large: PropTypes.bool,
};