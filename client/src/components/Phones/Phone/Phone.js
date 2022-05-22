import React from 'react';
import PhoneAdditional from './PhoneAdditional/PhoneAdditional';

function Phone(props){
    const [additionalInfo, setAddtionalInfo] = React.useState(false);

    return(
        <div className='phone'>
            
            <div className='phone_body'>
                <img className='phone_image' src={props.phone.compressedFile} alt={props.phone.imageFileName}/>
                <p className='phone_name'>{props.phone.name}</p>
                <div>
                    {
                        additionalInfo ? <div>
                            <PhoneAdditional phone={props.phone}/> 
                            <button className='phone_button' onClick={() => setAddtionalInfo(false)}>View less details</button>
                            <p>{additionalInfo}</p>
                            </div>
                            :
                         <div>
                        <button className='phone_button' onClick={() => setAddtionalInfo(true)}>View more details</button>
                        <p>{additionalInfo}</p>
                        </div>
                    }
                </div>
            </div> 
        </div>
    );
}

export default Phone;