import React from 'react';
import { useState } from 'react';

const ColorGames = () => {
  //const color ="blue";
  const [color, setColor] = useState("orange");
  const [colorList,setColorList]=useState(["blue","skyblue","crimson"]);
  //const colorList = ["blue", "skyblue", "crimson"];
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  }

  return (
    <div className='add-color'>
    <div className='btn-w-ctrl'>
      <input style={styles} type="text" placeholder='Enter the Color' onChange={(event) => setColor(event.target.value)} value={color} />
      <button onClick={()=>setColorList([...colorList,color])}> Add Color </button>
      </div>
      {
        colorList.map((clr) => {
          return <ColorBox color={clr} />
        })
      }
    </div>
  
  
  
  
  

  )
}

export default ColorGames;

const ColorBox = ({ color }) => {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
    marginTop:"20px",
  }
  return <>
    <div style={styles}></div>
  </>
}