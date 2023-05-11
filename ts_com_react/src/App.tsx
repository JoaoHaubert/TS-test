import React from 'react';
//Import component
import FirstComponent from './components/FirstComponent';
//Destructuring
import SecondComponent from './components/SecondComponent';
import Desctructuring from './components/Destructuring';
//useState
import State from './components/State';
function App() {
  //Variables
  const name: string = "Ayla"
  const age: number = 1.7
  const isRunning: boolean = true

  //Functions
  const greet = (name: string): string => {
    return `Hello, ${name}!`
  }


  return (
    <div className="App">
      <h1>React tsx</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {isRunning && 
        <p>She is running!</p>
      }
      <p>{greet(name)}</p>
      <FirstComponent />
      <SecondComponent name="Second" />
      <Desctructuring 
      title="Local party" 
      content= "Let me know here" 
      commentsQty= {5}
      tags= {["summer", "party", "potato"]}
      />
      <Desctructuring 
      title="Front end developer" 
      content= "JS and TS user" 
      commentsQty= {2}
      tags= {["tech", "javascript"]}
      />
      <State />
    </div>
  );
}

export default App;