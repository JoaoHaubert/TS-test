import React, { createContext } from 'react';
//context
import Context from './components/Context';
//Import component
import FirstComponent from './components/FirstComponent';
//Destructuring //Enum
import SecondComponent from './components/SecondComponent';
import Desctructuring, { Category } from './components/Destructuring';
//useState
import State from './components/State';
//Type
type textOrNull = string | null
//FixedType
type fixedValue = "Eai" | "Ola" | "Oi"
//Context

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  //Variables
  const name: string = "Ayla"
  const age: number = 1.7
  const isRunning: boolean = true

  //Functions
  const greet = (name: string): string => {
    return `Hello, ${name}!`
  }
  //Type
  const firstText: textOrNull = "testing text"
  let secondText: textOrNull = null
 //FixedType
  const fixedText: fixedValue = "Oi"
 //context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value = {contextValue}>
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
      category={Category.JS}
      />
      <Desctructuring 
      title="Front end developer" 
      content= "JS and TS user" 
      commentsQty= {2}
      tags= {["tech", "javascript"]}
      category={Category.P}
      />
      <State />

      <p>{firstText && <p>Testing text again</p>}</p>
      <p>{secondText && <p>aaaaaaa</p>}</p>

      <p>Fixed type: {fixedText}</p>
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;