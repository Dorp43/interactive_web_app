import React, { useState } from "react";
import Terminal from './Terminal';
import ToolsBar from './ToolsBar';


function App() {

const [terminalOpen, setTerminal] = useState(true);

function onOpen(status){
    alert(status);
    setTerminal(status);
}

  return (
    <div className="container">
        {terminalOpen ? <Terminal
        open={onOpen}
        isOpen={terminalOpen}
        name="Command Prompt"
        /> : null}
        <ToolsBar
        open={onOpen}
        />
    </div>
  );
}

export default App;