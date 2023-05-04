import React from 'react';
//Import component
import FirstComponent from './components/FirstComponent'

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
    </div>
  );
}

export default App;