import react, {useState} from "react";
import programmingList from './programmingList';
import programmingParagraph from './programmingParagraph';
import programmingInfo from './ProgrammingInfo';

function App() {
  const [programming, setProgramming] =  useState("String");

  const chooseProgrammingLanguage = (concept) =>{
    setProgramming(concept);    
  }
  return (
    <div className="App">
      <header className="App-header">
      <programmingList concepts={programmingInfo} onSelect={chooseProgrammingLanguage} />
      <programmingParagraph concept={programming} /> 
      </header>
    </div>
  );
}

export default App;
