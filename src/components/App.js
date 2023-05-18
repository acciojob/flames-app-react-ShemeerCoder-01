// import React, {Component, useState} from "react";
import React,{useState} from 'react';
import '../styles/App.css';
// import { size } from "cypress/types/lodash";

// class App extends Component {
//     render() {
//         let [fname,setFname] = useState('');
//         let [secname,setSecname] = useState('');
//         let [size,setSize] = useState(-1);

//         function check(){
            
//             if(fname == '' || secname == ''){
//                 return;
//             }
//             else{
//                 for(let i = 0; i < fname.length; i++){
//                     for(let j = 0; j < secname.length; j++){
//                         if(fname.charAt(i) == secname.charAt(i)){
//                             fname =fname.slice(0,i) + fname.slice(i+1);
//                             secname = secname.slice(0,i) + secname.slice(i+1);
//                         }
//                     }
//                 }
//                setSize(fname.length + secname.length);

//             }
//         }

//         return(
//             <div id="main">
//               <input value={fname} data-testid="input1" onChange={(e)=> setFname(e.target.value)} type="text" placeholder="Enter first name"/>
//               <input value={secname} data-testid="input2" onChange={(e)=> setSecname(e.target.value)} type="text" placeholder="Enter second name"/>
//               <button onClick={check} data-testid="calculate_relationship">Calculate Relationship Future</button>
//               <button data-testid="clear">Clear</button>
//               {fname == '' || secname == ''? <h3>Please Enter valid input</h3>:size % 6 ==1?<h3>Friends</h3>:size%6 == 2?<h3>Love</h3>:size % 6 ==3?<h3>Affection</h3>:size % 6 ==4?<h3>Marriage</h3>:size % 6 ==5?<h3>Enemy</h3>:<h3>Siblings</h3>}
//             </div>
//         )
//     }
// }

function App(){
    let [fname,setFname] = useState('');
    let [secname,setSecname] = useState('');
    let [size,setSize] = useState(-1);
    let [flag,setFlag] = useState(false);

    function check(){
        
        if(fname === '' || secname === ''){
           setFlag(true);
           return;
        }
        else{
            for(let i = 0; i < fname.length; i++){
                for(let j = 0; j < secname.length; j++){
                    if(fname.charAt(i) == secname.charAt(i)){
                        fname =fname.slice(0,i) + fname.slice(i+1);
                        secname = secname.slice(0,i) + secname.slice(i+1);
                    }
                }
            }
           setFlag(false);
           setSize(fname.length + secname.length);

        }
    }

    function clear(){
        setFname('');
        setSecname('');
        setFlag(false);
        setSize(-1);
    }

    return(
        <div id="main">
          <input name="name1" value={fname} data-testid="input1" onChange={(e)=> setFname(e.target.value)} type="text" placeholder="Enter first name"/>
          <input name="name2" value={secname} data-testid="input2" onChange={(e)=> setSecname(e.target.value)} type="text" placeholder="Enter second name"/>
          <button onClick={check} data-testid="calculate_relationship">Calculate Relationship Future</button>
          <button onClick={clear} data-testid="clear">Clear</button>
          {/* {flag?<h3>Please Enter valid input</h3>:null} */}
          {flag?<h3>Please Enter valid input</h3>:size % 6 ==1?<h3>Friends</h3>:size%6 == 2?<h3>Love</h3>:size % 6 ==3?<h3>Affection</h3>:size % 6 ==4?<h3>Marriage</h3>:size % 6 ==5?<h3>Enemy</h3>:size % 6 ==0?<h3>Siblings</h3>:null}
        </div>)
}


export default App;
