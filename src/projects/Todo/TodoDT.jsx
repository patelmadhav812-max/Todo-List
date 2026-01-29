import { useEffect, useState } from 'react'
export const TodoDT =()=>{
    const [dateTime, setDateTime] = useState("")
    useEffect(()=>{
        const Interval
        =  setInterval(() => {
              const now = new Date();
              const setDate = now.toLocaleDateString();
              const setTime = now.toLocaleTimeString();
              setDateTime(
                  `${setDate}-${setTime}`
              )
          }, 1000)
          return ()=>clearInterval(Interval);
        },[]);
    return(
        <h2 className='date-time'>{dateTime}</h2>
    )
}