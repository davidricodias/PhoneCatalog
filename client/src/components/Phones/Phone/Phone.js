import React from 'react';

function Phone(props){
    return(
        <div className='phone'>
            <div className='phone_body'>
                <img className='phone_image' src={'https://images.unsplash.com/photo-1571079570759-8b8800f7c412?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987'} alt={props.phone.imageFileName}/>
                <div className='phone_name'>
                    <p>{props.phone.name}</p>
                </div>
            </div>
            <button className='phone_button'>View more details</button>
        </div>
    );
}

export default Phone;