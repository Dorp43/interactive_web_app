import React, { useState } from "react";
import { useDrag } from "react-use-gesture";
import { FaWindowMinimize, FaWindowRestore, FaWindowClose } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs"
import CommandLine from "./CommandLine";

function Terminal(props){

    const [windowPos, setWindowPos] = useState({x: 50, y: 0});
    const [commandLine, setCommandLine] = useState("");
    const [commandLines, setCommandLines] = useState([
        "Microsoft Windows [Version 10.0.19042.1288]",
        "(c) Microsoft Corporation. All rights reserved."
    ]);

    const [expand, isExpand] = useState(false);
    const [show, isShown] = useState(true);

    function addCommandLine(commandLine) {
        setCommandLines(prevLines => {
          return [...prevLines, commandLine];
        });
    }

    function handleChange(e){
        setCommandLine(e.target.value);
    }

    const bindWindowPos = useDrag((params) => {
        setWindowPos({
            x: params.offset[0],
            y: params.offset[1],
        })
    });

    function focusInput(){
        let input = document.getElementsByClassName("terminal_input");
        input[0].focus();
    }

    function handleSubmit(e) {
        addCommandLine(commandLine);
        setCommandLine("");
        e.preventDefault();
    }

    //Tools bar
    function restore(){ //Restore down
        if(expand === false){
            isExpand(true);
            setWindowPos({
                x: 0,
                y: -25,
            })
        }else{
            isExpand(false);
            setWindowPos({
                x: 0,
                y: 0,
            })
        }
    }

    function minimize(){    //Minimize
        if(show === false){
            isShown(true);
            setWindowPos({
                x: 0,
                y: 0,
            })
            props.open(true);
        }else{
            isShown(false);
            props.open(false);
        }
    }

    return(
        <div className="terminal" style = {{
        ...({
            top: windowPos.y,
            left: windowPos.x,
        }),
        ...({width: expand ? "100%" : "400px"
        }),
        ...({height: expand ? "100vh" : "300px"
        }),
        ...({display: show ? "block" : "none"
        }),
        }}
        >
            <div {...bindWindowPos()} className="info-container">
            <p><span><BsTerminalFill/></span>{props.name}</p>
            </div>
            <div className="terminal-tools-bar">
                <button onClick={minimize}><FaWindowMinimize/></button>
                <button onClick={restore}><FaWindowRestore/></button>
                <button><FaWindowClose/></button>
            </div>
            <div className="terminal-container" onClick={focusInput}>
            
            {commandLines.map((commandLine, index) => {
            return (
                <CommandLine
                    key={index}
                    content={commandLine}
                />
            );
        })}
                <form onSubmit={handleSubmit} spellCheck="false">
                <input type="text" className="terminal_input" autoComplete="false" autoFocus="true" onChange={handleChange} value={commandLine}></input>
                </form>
            </div>
        </div>
    )
}

export default Terminal;