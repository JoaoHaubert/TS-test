import React from 'react';


function App() {
  //Variaveis
  const name: string = "Ayla"
  const age: number = 1.7
  const isRunning: boolean = true

  return (
    <div className="App">
      <h1>React tsx</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {isRunning && 
        <p>She is running!</p>
      }
    </div>
  );
}

export default App;