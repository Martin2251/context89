import React, {createContext, useContext, useState} from 'react';

import './App.css';

const UserContext = createContext<string | null >(null);

const UserPage: React.FC = () => {

  const context = useContext(UserContext);
  return(
    <div>
      {context}
    </div>
  )
  }

  const NewComponent: React. FC = () => {
    const context = useContext(UserContext);
    return <div>
      This is  a new component
      <br  />
      {context}
    </div>

  }

function App() {
const [user, setUser] = useState('Initial Value')
const handleClick = () => {
setUser("hello from button, " + new Date().toDateString());
}

  return (
    <UserContext.Provider value={user}>
    <div className="App">
      <h1>Hello from home page</h1>
      <button onClick={handleClick}>Change Value</button>
    <UserPage  />
    -----
    <NewComponent  />
    </div>
    </UserContext.Provider>
  );
}

export default App;


