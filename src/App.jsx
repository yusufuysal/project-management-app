import { useState } from "react"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

function App() {
  const [isAdding, setIsAdding] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
     <Sidebar setIsAdding={setIsAdding} setIsSelected={setIsSelected}/>
     <MainContent isAdding={isAdding} isSelected={isSelected}/>
    </>
  );
}

export default App;
