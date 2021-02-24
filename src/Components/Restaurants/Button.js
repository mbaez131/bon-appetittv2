import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


// CSS classes in in array to export to the styles fucntion.
const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children, type, onClick, buttonStyle, buttonSize
}) => {
    // If you put in button style it will put either primary or outline or by default add the first item in the array
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    // return (
    //     <Link to='/products' className='btn-mobile'>
    //         <button
    //             className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
    //             {/* Displays whatever you want in that button based off what the children is given */}
    //             {children}
    //         </button>
    //     </Link>
    // )

};
