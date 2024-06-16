import { useState } from "react"
import data from "./data";




export default function Accordian(){
    const [selected, setSelected] =useState(null);
    const [enableMultiSelection, setEnableMultiSelection]=useState(false);
    const [multiple, setMultiple]=useState([]);


    function handleSingleSelection(getCurrentId){
        
        if(getCurrentId===selected)
            setSelected(null);
        else
         setSelected(getCurrentId);
    }
    function handleMultipleSelection(getCurrentId){
        let copyMutiple = [...multiple];
        const indexOfCurrentId = copyMutiple.indexOf(getCurrentId);
        if(indexOfCurrentId <0)
            copyMutiple.push(getCurrentId);
        else
            copyMutiple.splice(indexOfCurrentId,1);
        setMultiple(copyMutiple);
    }
    

    function enableMultiSelectionHAndler ()
    {
        setEnableMultiSelection(!enableMultiSelection);
        console.log(enableMultiSelection);
        if(enableMultiSelection)
        {
            let initialSelection = [selected]
            setMultiple(initialSelection);
            setSelected(null);
        }
        else
        {
            setMultiple([]);
        }
    }


    return <div className="w-[600px] mx-auto mt-[100px] p-[30px] text-center bg-red-300">
        <button onClick={()=>enableMultiSelectionHAndler()} className="font-bold border p-1 bg-red-400">Enable Multiselecton</button>
        <div className=" mx-auto mt-[100px] p-[30px] text-center bg-red-300">
            {
                data && data.length > 0?
                data.map(dataItem=> <div className="mb-[50px] border-[2px] p-3">
                    <div onClick={enableMultiSelection?()=>handleMultipleSelection(dataItem.id) :()=>handleSingleSelection(dataItem.id)} className="flex flex-col gap-2 hover:text-yellow-300">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection
                        ? multiple.indexOf(dataItem.id) !== -1 && (
                            <div className="acc-content ">{dataItem.answer}</div>
                          )
                        : selected === dataItem.id && (
                            <div className="acc-content ">{dataItem.answer}</div>
                          )
                        /*selected === dataItem.id ||
                        multiple.indexOf(dataItem.id) !== -1 ? (
                        <div className="content">{dataItem.answer}</div>
                        ) : null*/
                    }
                </div>)
                :<div> no data </div>
            }
        </div>
        
    </div>

}