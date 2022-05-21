import React from 'react';
import axios from 'axios';

import Phone from './Phone/Phone';

const baseURL = "http://localhost:3001/phones";


function Phones(props) {
    const [phones, setPhones] = React.useState([])
    const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    axios.get(baseURL)
    .then(res => {
      console.log(res);
      setPhones(res.data);
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, []);


  return(
    <div className='phones'>
        {loading ? <p>Loading...</p> :
            <ul className='phones_ul'>
                {
                    phones.filter((phone) => {
                        if(props.filter === ''){
                            return phone
                        } else if (phone.name.includes(props.filter)){
                            return phone;
                        }
                    }).map(phone => <li key={phone.id}><Phone phone={phone} /></li>)
                }
            </ul>
        }
    </div>
  );
}

export default Phones;