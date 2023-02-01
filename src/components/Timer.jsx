import React, {useState} from "react";


function Timer(){

    const now = new Date().toLocaleTimeString();
    const today = new Date();
    const date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    const [time, setTime] = useState(now);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    setInterval(updateTime, 1000);

    return (
        <div>
        <p>{time}</p>
        <p>{date}</p>
        </div>
    );
       
}

export default Timer;