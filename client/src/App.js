import React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:3001/phones";

function App() {
  const [phones, setPhones] = React.useState([])

  React.useEffect(() => {
    axios.get(baseURL)
    .then(res => {
      console.log(res);
      setPhones(res.data);
    })
    .catch(error => console.log(error))
  }, []);

  return (
    <div className="sApp">
      <ul>
        {
          phones.map(phone => <li key={phone.id}>{phone.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
