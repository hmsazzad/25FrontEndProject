import { useState } from "react"




export default function RandomColor(){

    const [colorType, setColorType] =useState('hex');
    const[color, setColor]=useState('#000000')


    function generateHexColor()
    {
        const hex =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor="#";
        for(let i=0;i<6;i++){
            let index=Math.floor(Math.random()*15)
            hexColor=hexColor+hex[index];
        }
        console.log(hexColor);
        setColor(hexColor);
        console.log(color);
    }
    function generateRgbColor()
    {
        const r =Math.floor(Math.random()*256);
        const g =Math.floor(Math.random()*256);
        const b =Math.floor(Math.random()*256);

        setColor(`rgb(${r},${g}, ${b})`);
    }



    return <div className={`w-[500px] h-[500px] mx-auto mt-[200px] border-[5px] border-pink-700 flex justify-center items-center gap-5 text-pink-500`}
    style={{
        background: color,
      }}
    >

        <button onClick={colorType==='hex'?generateHexColor:generateRgbColor}>Generate</button>
        <button onClick={()=>setColorType('hex')}>HEX</button>
        <button onClick={()=>setColorType('rgb')}>RGB</button>
        <h3 className="border-[1px] p-1 ">{color}</h3>
        

    </div>
}