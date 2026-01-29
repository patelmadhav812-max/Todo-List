// import React ,{useState} from 'react'
// import { useFormState } from 'react-dom'

// const App = () => {
//   const [username, setusername] = useState('');
//   const submithandler = (e)=>{
//     e.preventDefault()
//     console.log(username)
//     setusername('')
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submithandler(e)
//       }}>
        
//         <input
//         value = {username}
//         onChange={(e)=>{
//           setusername(e.target.value)
//         }}
//          type="text" className='' placeholder='Enter your name'/>
//         <button className=''>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



// import axios from 'axios'
// import React,{useState} from 'react'
// import Card from './components/Card'

// const App = () => {
//   const [data, setData] = useState([]);
//   const getData=async()=>{
//     const response = await axios.get('https://picsum.photos/v2/list')
//     setData(response.data)
//     console.log(data)
//   }
//   return (
//     <div className='p-10'>
//       <button onClick={getData} className='bg-lime-800 font-bold text-white px-6 py-4 rounded active:scale-50'>Get Data</button>
//       <div className=''>
//        {data.map(function(elem,idx){
//          return <Card key={idx} author={elem.author}  download={elem.download_url}/>
//         })}     
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
// import Anime from "./components/Anime";
// import './components/EV.css';
// import './components/Anime.module.css';

// // import { State } from './components/hooks/State';
// import { DericedState } from './components/hooks/DericedState';
// import { LiftingState } from './components/hooks/LiftingState';
// import { Toggle } from './ProjectToggle/Toggle';
import { Todo } from './projects/Todo/Todo';

 const App =()=>{

  return(
  <Todo/>
  // <Anime/>
  );
};
 export default App

