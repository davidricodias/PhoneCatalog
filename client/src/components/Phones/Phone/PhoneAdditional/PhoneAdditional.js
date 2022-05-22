import React from 'react';

function PhoneAdditional(props){
    return(
        <ul className='phone_additional'>
            <li>
                Name: {props.phone.name}
            </li>
            <li>
                Manufacturer: {props.phone.manufacturer}
            </li>
            <li>
                Description: {props.phone.description}
            </li>
            <li>
                Color: {props.phone.color}
            </li>
            <li>
                Price: {props.phone.price}
            </li>
            <li>
                Screen: {props.phone.screen}
            </li>
            <li>
                Processor: {props.phone.processor}
            </li>
            <li>
                Ram: {props.phone.ram}
            </li>
        </ul>
    );
}

export default PhoneAdditional;