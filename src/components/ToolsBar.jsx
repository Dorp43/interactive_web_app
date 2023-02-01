import React, { useState } from "react";
import { BsWindows, BsTerminalFill } from "react-icons/bs";
import Timer from "./Timer";

function ToolsBar(props){
    const [minimized, isMinimized] = useState(true);
    const [open, isOpen] = useState(true);

    return (
        <div className="tools-bar">
            <div className="tools-bar-left">
           <button><BsWindows/></button>
           <button style= {{
                ...({background: minimized ? "rgba(230, 230, 230, 0.315)" : "none"
                }),
                ...({borderBottom: open ? "5px solid rgba(0, 191, 255, 0.507)" : "none"
                }),
                ...({paddingBottom: open ? "0px" : "5px"
            }),
           }}
           onClick={() => {
               props.open(minimized);
                if(minimized){
               isMinimized(false);
                }else{
                    isMinimized(true);
                }
           }}>
               <BsTerminalFill/></button>
           </div>
           <div className="tools-bar-right">
               <Timer/>
           </div>
        </div>
    );
}

export default ToolsBar;